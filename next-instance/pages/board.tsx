import gql from "graphql-tag";
import { NextContext } from "next";
import React, { Component } from "react";
import { Query } from "react-apollo";
import { PacmanLoader } from "react-spinners";
import Head from "next/head";

interface SingleBoardProps {
  query: {
    id: string;
  };
}

const SINGLE_BOARD_QUERY = gql`
  query SINGLE_BOARD_QUERY($id: ID!) {
    board(where: { id: $id }) {
      id
      name
      description
    }
  }
`;

export default class Board extends Component<SingleBoardProps> {
  static async getInitialProps(ctx: NextContext) {
    const { query } = ctx;
    return { query };
  }

  render() {
    const id = this.props.query.id;
    return (
      <Query query={SINGLE_BOARD_QUERY} variables={{ id }}>
        {({ error, loading, data }) => {
          if (error) return <p>Error loading board with id: {id}</p>;
          if (loading)
            return <PacmanLoader loading={loading} color={"black"} />;

          return (
            <>
              <Head>
                <title>{data.board.name}</title>
              </Head>
              <p>This is the page for board {data.board.name}</p>
            </>
          );
        }}
      </Query>
    );
  }
}
