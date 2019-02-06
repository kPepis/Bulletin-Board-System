import { Affix, Button, List, message, Modal } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { NextContext } from "next";
import Head from "next/head";
import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import CanvasDraw, { DrawingCanvas } from "react-canvas-draw";
import { connect } from "react-redux";
import { PacmanLoader } from "react-spinners";
import { bindActionCreators } from "redux";

import Post, { PostProps } from "../components/Post";
import PostForm from "../components/PostForm";
import { ADD_ONLINE_USER, CREATE_POST_MUTATION } from "../graphql/mutations";
import {
  BOARD_ONLINE_USERS_QUERY,
  SINGLE_BOARD_QUERY,
} from "../graphql/queries";
import { updateAnnouncement } from "../lib/states/announcement/actions";

interface SingleBoardProps {
  socket: SocketIOClient.Socket;
  query: {
    id: string;
  };
  userName?: string;
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

class Board extends Component<SingleBoardProps, SingleBoardState> {
  static async getInitialProps(ctx: NextContext) {
    const { query, req } = ctx;

    return { query, userName: req.userName };
  }

  state: SingleBoardState = {
    modalVisible: false,
    modalLoading: false,
    formValid: false,
  };

  componentDidMount(): void {
    const socket = this.props.socket;
    const id = this.props.query.id;
    const userName = this.props.userName;

    socket.emit("board connect", {
      boardId: id,
      socketId: socket.id,
      userName,
    });

    socket.on("user connect", () => {
      // todo change this.props.userName to the connecting userName
      message.info(`User ${userName} is now seeing this board`);
      console.log("A new user is seeing this board");
    });
  }

  showModal: () => void = () => {
    this.setState({ modalVisible: true });
  };

  modalCancelHandler: () => void = () => {
    this.setState({
      modalVisible: false,
    });
  };

  formRef!: FormRef;

  loadableCanvas!: DrawingCanvas;

  saveFormRef: (formRef: FormRef) => void = formRef => {
    this.formRef = formRef;
  };

  componentWillUnmount(): void {
    this.props.socket.emit("board disconnect", this.props.query.id);
  }

  render() {
    const id = this.props.query.id;

    const listFooter = (
      <Affix offsetBottom={10}>
        <Button type="primary" onClick={this.showModal} htmlType="button">
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

            console.log(data.board);

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

                <p>Currently logged in users: {data.board.usersOnline[0].userName}</p>
              </>
            );
          }}
        </Query>

        <Mutation
          mutation={CREATE_POST_MUTATION}
          refetchQueries={[{ query: SINGLE_BOARD_QUERY, variables: { id } }]}
        >
          {(createPost, { loading }) => (
            <Modal
              align={null}
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
                    const image = this.loadableCanvas.getSaveData();
                    await createPost({
                      variables: {
                        title: values.postTitle,
                        content: values.postContent,
                        boardId: id,
                        image,
                      },
                    });
                    this.setState({
                      modalVisible: false,
                    });
                  }
                });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <PostForm wrappedComponentRef={this.saveFormRef} />
                <CanvasDraw
                  ref={(canvasDraw: any) => (this.loadableCanvas = canvasDraw)}
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

const mapStateToProps = state => ({
  announcementMessage: state.announcement.message,
});

const mapDispatchToProps = dispatch => {
  return {
    updateAnnouncement: bindActionCreators(updateAnnouncement, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
