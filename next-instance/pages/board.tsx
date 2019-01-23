import { Card, List, Avatar } from "antd";
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
    board(where: { id: $id }) {
      id
      name
      description
      posts {
        id
        title
        content
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

          const posts: PostProps = data.board.posts;

          return (
            <>
              <Head>
                <title>{data.board.name}</title>
              </Head>

              <List
                itemLayout="vertical"
                size="large"
                dataSource={posts}
                bordered={true}
                renderItem={(post: PostProps) => (
                  <List.Item
                    key={post.id}
                    extra={
                      <img
                        alt="user avatar"
                        src={`https://robohash.org/${post.id}`}
                        width={100}
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar src={`https://robohash.org/${post.id}`} />
                      }
                      title={post.title}
                      description={post.content}
                    />
                  </List.Item>
                )}
              />
            </>
          );
        }}
      </Query>
    );
  }
}
