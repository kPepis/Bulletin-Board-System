import { Affix, Button, Icon, List, message, Modal } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { NextContext } from "next";
import Head from "next/head";
import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import CanvasDraw, { DrawingCanvas } from "react-canvas-draw";
import { connect } from "react-redux";
import { PacmanLoader } from "react-spinners";
import { bindActionCreators } from "redux";
import { addOnlineUser } from "../actions";

import Post, { PostProps } from "../components/Post";
import PostForm from "../components/PostForm";
import { CREATE_POST_MUTATION } from "../graphql/mutations";
import { SINGLE_BOARD_QUERY } from "../graphql/queries";

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

    socket.on("user connect", (incomingUser: { userName: string }) => {
      message.info(`User ${incomingUser.userName} is now seeing this board`);
    });

    if (this.props.userName) {
      this.props.addOnlineUser({ userName: this.props.userName });
    }

    console.log(this.props.onlineUsers);
    // this.props.addOnlineUser()
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
    console.log(this.props);

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

                <p>
                  <Icon type="contacts" theme="twoTone" /> Currently logged in
                  users: {/*{data.board.usersOnline[0].userName}*/}
                  {(this.props.onlineUsers as Array<any>).map(
                    user => `${user}, `,
                  )}
                  {/*{(data.board.usersOnline as Array<any>).map(*/}
                  {/*user => `${user.userName}, `,*/}
                  {/*)}*/}
                </p>
              </>
            );
          }}
        </Query>

        {/*<Mutation*/}
        {/*mutation={ADD_ONLINE_USER}*/}
        {/*refetchQueries={[{ query: SINGLE_BOARD_QUERY, variables: { id } }]}*/}
        {/*>*/}
        {/*{(addOnlineUser, _) => {*/}
        {/*if (this.props.userName) {*/}
        {/*addOnlineUser({*/}
        {/*variables: { boardId: id, userName: this.props.userName },*/}
        {/*});*/}
        {/*}*/}

        {/*return null;*/}
        {/*}}*/}
        {/*</Mutation>*/}

        <Mutation
          mutation={CREATE_POST_MUTATION}
          refetchQueries={[
            {
              query: SINGLE_BOARD_QUERY,
              variables: { id, userName: this.props.userName },
            },
          ]}
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

const mapStateToProps = state => {
  return { onlineUsers: state.onlineUsers };
};

const mapDispatchToProps = dispatch => {
  return {
    addOnlineUser: bindActionCreators(addOnlineUser, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
