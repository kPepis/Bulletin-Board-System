import { Affix, Button, List, Modal } from "antd";
import { FormComponentProps } from "antd/lib/form";
import gql from "graphql-tag";
import { NextContext } from "next";
import Head from "next/head";
import React, { Component } from "react";
import { Mutation, MutationFn, MutationResult, Query } from "react-apollo";
import CanvasDraw, { DrawingCanvas } from "react-canvas-draw";
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
  formValid: boolean;
}

interface FormRef {
  context: object;
  props: FormComponentProps;
  refs: object;
  state: null;
  submitHandler: React.FormEventHandler;
}

interface PostFormFields {
  postTitle: string;
  postContent: string;
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
        image
      }
    }
  }
`;

const CREATE_POST_MUTATION = gql`
  mutation CREATE_POST_MUTATION(
    $title: String!
    $content: String!
    $boardId: String!
    $image: String!
  ) {
    createPost(
      title: $title
      content: $content
      boardId: $boardId
      image: $image
    ) {
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
    formValid: false,
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  modalCancelHandler = () => {
    console.log(this.loadableCanvas.getSaveData());
    this.setState({
      modalVisible: false,
    });
  };

  formRef!: FormRef;

  loadableCanvas!: DrawingCanvas;

  saveFormRef = (formRef: FormRef) => {
    this.formRef = formRef;
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
                    <Post {...post} key={post.id} />
                  )}
                />
              </>
            );
          }}
        </Query>

        <Mutation mutation={CREATE_POST_MUTATION}>
          {(createPost, { loading }) => (
            <Modal
              title="Create new post"
              visible={this.state.modalVisible}
              confirmLoading={loading}
              destroyOnClose={true}
              onCancel={this.modalCancelHandler}
              onOk={e => {
                e.preventDefault();
                const form = this.formRef.props.form;
                form.validateFields(async (err, values: PostFormFields) => {
                  if (!err) {
                    console.log(values);
                    console.log(this.props.query);
                    const image = this.loadableCanvas.getSaveData();
                    await createPost({
                      variables: {
                        title: values.postTitle,
                        content: values.postContent,
                        boardId: id,
                        image,
                      },
                    });
                  }
                });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <PostForm wrappedComponentRef={this.saveFormRef} />
                <CanvasDraw
                  ref={(canvasDraw: DrawingCanvas) =>
                    (this.loadableCanvas = canvasDraw)
                  }
                  canvasWidth={472}
                  canvasHeight={250}
                  imgSrc=""
                  disabled={loading}
                />
              </fieldset>
            </Modal>
          )}
        </Mutation>
      </>
    );
  }
}
