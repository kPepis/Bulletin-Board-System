import { Affix, Button, List, Modal } from "antd";
import { FormComponentProps } from "antd/lib/form";
import gql from "graphql-tag";
import { NextContext } from "next";
import Head from "next/head";
import React, { Component } from "react";
import {
  Mutation,
  Query,
  MutationResult,
  MutationFn,
  OperationVariables,
} from "react-apollo";
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

interface MutationHandler {
  (mutationFn: MutationFn, mutationResult: MutationResult): JSX.Element;
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
    formValid: false,
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  modalOkHandler = (mutationFn: MutationFn<any, OperationVariables>) => {
    // e: React.MouseEvent<any, MouseEvent> = null
    // e.preventDefault();
    const form = this.formRef.props.form;
    form.validateFields((err, values: PostFormFields) => {
      if (!err) {
        console.log(values);
        await mutationFn({
          variables: {
            title: values.postTitle,
            content: values.postContent,
            boardName
          },
        });
        // unset loading to ok
      }
    });
  };

  modalCancelHandler = () => {
    this.setState({
      modalVisible: false,
    });
  };

  formRef!: FormRef;

  saveFormRef = (formRef: FormRef) => {
    this.formRef = formRef;
  };

  mutationHandler() {
    <Mutation mutation={CREATE_POST_MUTATION}>
      {(createBoard, { loading }) => <p>{loading}</p>}
    </Mutation>;
  }

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
          {(createBoard, { loading }) => (
            <Modal
              title="Create new post"
              visible={this.state.modalVisible}
              onOk={createBoard => this.modalOkHandler(createBoard)}
              onCancel={this.modalCancelHandler}
              // confirmLoading={loading}
              destroyOnClose={false}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <PostForm wrappedComponentRef={this.saveFormRef} />
              </fieldset>
            </Modal>
          )}
        </Mutation>
      </>
    );
  }
}
