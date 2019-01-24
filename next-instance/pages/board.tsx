import { Affix, Button, List, Modal } from "antd";
import { FormComponentProps } from "antd/lib/form";
import gql from "graphql-tag";
import { NextContext } from "next";
import Head from "next/head";
import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import { PacmanLoader } from "react-spinners";

import Post, { PostProps } from "../components/Post";
import PostForm from "../components/PostForm";

interface SingleBoardProps {
  query: {
    id: string;
  };
}

interface SingleBoardState {
  modalVisible: boolean;
  modalLoading: boolean;
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

const CREATE_POST_MUTATION = gql`
  mutation CREATE_POST_MUTATION(
    $title: String!
    $content: String!
    $board: String!
  ) {
    createPost(title: $title, content: $content, boardName: $board) {
      title
      content
    }
  }
`;

export default class Board extends Component<
  SingleBoardProps & FormComponentProps,
  SingleBoardState
> {
  static async getInitialProps(ctx: NextContext) {
    const { query } = ctx;
    return { query };
  }

  state: SingleBoardState = {
    modalVisible: false,
    modalLoading: false,
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  modalOkHandler = () => {
    this.setState({
      modalVisible: false,
    });
  };

  modalCancelHandler = () => {
    this.setState({
      modalVisible: false,
    });
  };

  render() {
    const id = this.props.query.id;

    const listFooter = (
      <Affix offsetBottom={10}>
        <Button type="primary" onClick={this.showModal}>
          Publish new post
        </Button>
      </Affix>
    );

    return (
      <>
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
                  footer={listFooter}
                  itemLayout="vertical"
                  size="large"
                  dataSource={posts}
                  renderItem={(post: PostProps) => (
                    <Post
                      id={post.id}
                      content={post.content}
                      title={post.title}
                      key={post.id}
                    />
                  )}
                />
              </>
            );
          }}
        </Query>

        <Mutation mutation={CREATE_POST_MUTATION}>
          {(createPost, { data }) => (
            <Modal
              title="Create new post"
              visible={this.state.modalVisible}
              onOk={async e => {
                e.preventDefault();
              }}
              onCancel={this.modalCancelHandler}
            >
              <PostForm />
            </Modal>
          )}
        </Mutation>
      </>
    );
  }
}
