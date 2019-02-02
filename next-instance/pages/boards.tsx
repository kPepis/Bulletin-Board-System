import { Card, Pagination } from "antd";
import { NextContext } from "next";
import Router from "next/router";
import React, { Component } from "react";
import { Query } from "react-apollo";

import * as PrismaTypes from "../../Prisma/generated/prisma-client/";
import Board, { BoardProps } from "../components/Board";
import BoardsForm from "../components/BoardsForm";
import { perPage } from "../config";
import { GET_BOARDS_QUERY, PAGINATION_QUERY } from "../graphql/queries";

interface PaginationData {
  boardsConnection: {
    aggregate: {
      count: number;
    };
  };
}

interface BoardsProps {
  page: number;
  userId?: string;
  userName?: string;
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

export default class Boards extends Component<BoardsProps> {
  static async getInitialProps(ctx: NextContext) {
    const { query, req } = ctx;
    const page: number = query.page ? parseInt(query.page as string) : 1;
    return { page, userId: req.userId, userName: req.userName };
  }

  onPageChange = async (page: number) => {
    await Router.push({ pathname: "/boards", query: { page } });
  };

  render() {
    const boardsToShowConfig: BoardsQuery = {
      first: perPage,
      skip: (this.props.page - 1) * perPage,
    };

    return (
      <>
        <Query
          query={GET_BOARDS_QUERY}
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

        {/*todo render only if user is logged in*/}
        <BoardsForm userName={this.props.userName!} userId={this.props.userId!} />
      </>
    );
  }
}
