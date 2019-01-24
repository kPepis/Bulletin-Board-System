import { Card, Pagination } from "antd";
import gql from "graphql-tag";
import { NextContext } from "next";
import Router from "next/router";
import React, { Component } from "react";
import { Query } from "react-apollo";

import * as PrismaTypes from "../../Prisma/generated/prisma-client/";
import Board, { BoardProps } from "../components/Board";
import BoardsForm from "../components/BoardsForm";
import { perPage } from "../config";

interface PaginationData {
  boardsConnection: {
    aggregate: {
      count: number;
    };
  };
}

interface BoardsProps {
  page: number;
}

interface BoardsQuery {
  where?: PrismaTypes.BoardWhereInput;
  orderBy?: PrismaTypes.BoardOrderByInput;
  skip?: PrismaTypes.Int;
  after?: PrismaTypes.String;
  before?: PrismaTypes.String;
  first?: PrismaTypes.Int;
  last?: PrismaTypes.Int;
}

const GET_ALL_BOARDS = gql`
  query GET_ALL_BOARDS($skip: Int = 0, $first: Int = ${perPage}) {
    boards(skip: $skip, first: $first, orderBy: id_DESC) {
      id
      name
      description
      posts {
        id
      }
    }
  }
`;

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    boardsConnection {
      aggregate {
        count
      }
    }
  }
`;

export default class Boards extends Component<BoardsProps> {
  static async getInitialProps(ctx: NextContext) {
    const { query } = ctx;
    const page: number = query.page ? parseInt(query.page as string) : 1;
    return { page };
  }

  async onPageChange(page: number) {
    await Router.push({ pathname: "/boards", query: { page } });
  }

  render() {
    const boardsToShowConfig: BoardsQuery = {
      first: perPage,
      skip: (this.props.page - 1) * perPage,
    };

    return (
      <>
        <Query
          query={GET_ALL_BOARDS}
          variables={boardsToShowConfig}
          fetchPolicy="network-only"
        >
          {({ data, error, loading }) => {
            if (loading) {
              return <Card loading={loading} />;
            }
            if (error) return <p>Error loading boards: {error.message}</p>;
            return (
              <>
                {data.boards.map((board: BoardProps) => (
                  <Card hoverable={true} key={board.id}>
                    <Board {...board} />
                  </Card>
                ))}
              </>
            );
          }}
        </Query>

        <Query query={PAGINATION_QUERY} fetchPolicy="network-only">
          {queryResult => {
            const data: PaginationData = queryResult.data;
            let numOfBoards = 0;
            try {
              numOfBoards =
                data.boardsConnection === undefined
                  ? 0
                  : data.boardsConnection.aggregate.count;
            } catch {
              return <p>Error loading boards</p>;
            }

            const { error } = queryResult;
            if (error) return <p>Error loading boards: {error.message}</p>;
            return (
              <>
                <p>There are {numOfBoards} boards</p>
                <Pagination
                  showSizeChanger
                  total={numOfBoards}
                  defaultPageSize={perPage}
                  current={this.props.page}
                  onChange={this.onPageChange}
                />
              </>
            );
          }}
        </Query>

        <BoardsForm />
      </>
    );
  }
}
