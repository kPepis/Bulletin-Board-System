import { Card } from "antd";
import gql from "graphql-tag";
import { NextContext } from "next";
import Head from "next/head";
import React, { Component } from "react";
import { Query } from "react-apollo";
import { PacmanLoader } from "react-spinners";

import Post, { PostProps } from "../components/Post";

interface SingleBoardProps {
  query: {
    id: string;
  };
}

const SINGLE_BOARD_QUERY = gql`
  query SINGLE_BOARD_QUERY($id: ID!) {
    boards(where: { id: $id }) {
      id
      name
      description
      posts {
        id
        title
        content
        board {
          id
          name
        }
      }
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
          if (error)
            return (
              <p>
                Error loading board with id: {id}. {error.toString()}
              </p>
            );
          if (loading)
            return <PacmanLoader loading={loading} color={"black"} />;
          else {
            console.log(data.board);
          }

          return (
            <>
              <Head>
                <title>{data.board.name}</title>
              </Head>

              {data.board.posts !== null
                ? data.board.posts.map((post: PostProps) => (
                    <Card hoverable>
                      <Post {...post} key={post.id} />
                    </Card>
                  ))
                : "There are currently no posts in this board."}
            </>
          );
        }}
      </Query>
    );
  }
}
