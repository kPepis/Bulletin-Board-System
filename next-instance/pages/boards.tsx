import { Pagination } from "antd";
import gql from "graphql-tag";
import { NextContext } from "next";
import Router from "next/router";
import React, { Component } from "react";
import { Query } from "react-apollo";
import { PacmanLoader } from "react-spinners";

import Board, { BoardProps } from "../components/Board/Board";
import BoardsForm from "../components/BoardsForm/BoardsForm";
import { perPage } from "../config";
import * as PrismaTypes from "../../Prisma/generated/prisma-client/index";

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
        <p>List of boards:</p>
        <Query query={GET_ALL_BOARDS} variables={boardsToShowConfig}>
          {({ data, error, loading }) => {
            if (loading)
              return <PacmanLoader loading={loading} color={"black"} />;
            if (error) return <p>Error loading boards: {error.message}</p>;
            return (
              <>
                {data.boards.map((board: BoardProps) => (
                  <Board {...board} key={board.id} />
                ))}
              </>
            );
          }}
        </Query>

        <Query query={PAGINATION_QUERY}>
          {queryResult => {
            const data: PaginationData = queryResult.data;
            console.log(queryResult);
            const count =
              data.boardsConnection === undefined
                ? 0
                : data.boardsConnection.aggregate.count;

            const { error, loading } = queryResult;
            if (loading)
              return <PacmanLoader loading={loading} color={"black"} />;
            if (error) return <p>Error loading boards: {error.message}</p>;
            return (
              <>
                <p>There are {count} boards</p>
                {/* Total is the number of items, not pages */}
                <Pagination
                  showSizeChanger
                  total={count}
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
