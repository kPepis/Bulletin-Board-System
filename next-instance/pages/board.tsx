import { Affix, Button, Icon, List, message, Modal } from "antd";
import { FormComponentProps } from "antd/lib/form";
import WS from "isomorphic-ws";
import { NextContext } from "next";
import Head from "next/head";
import nookies from "nookies";
import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import CanvasDraw, { DrawingCanvas } from "react-canvas-draw";
import { Cookies } from "react-cookie";
import { connect } from "react-redux";
import { PacmanLoader } from "react-spinners";
import { bindActionCreators } from "redux";
import jwt from "jsonwebtoken";

import { addOnlineUser } from "../actions";
import { NookiesProps } from "../components/BoardsForm";
import Post, { PostProps } from "../components/Post";
import PostForm from "../components/PostForm";
import { CREATE_POST_MUTATION } from "../graphql/mutations";
import { SINGLE_BOARD_QUERY } from "../graphql/queries";

const cookies = new Cookies();

interface SingleBoardProps {
  socket: WS;
  query: {
    id: string;
  };
  userName?: string;
}

interface SingleBoardState {
  modalVisible: boolean;
  modalLoading: boolean;
  formValid: boolean;
  userName?: string;
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

let onlineUsers: Array<string> = [];

class Board extends Component<
  SingleBoardProps & NookiesProps,
  SingleBoardState
> {
  static async getInitialProps(ctx: NextContext) {
    const { query } = ctx;
    const cookies = nookies.get(ctx);
    // const kookie = ctx.req.headers.cookie;

    return { query, cookies };
  }

  // state: SingleBoardState = {
  //   modalVisible: false,
  //   modalLoading: false,
  //   formValid: false,
  // };

  constructor(props: SingleBoardProps & NookiesProps) {
    super(props);

    this.state = {
      modalVisible: false,
      modalLoading: false,
      formValid: false,
    };
  }

  unloadHandler = () => {
    const token = this.props.cookies.token;
    const { userName } = token
      ? (jwt.decode(token) as {
          userId: string;
          userName: string;
        })
      : { userName: null };

    this.props.socket.emit("board disconnect", {
      boardId: this.props.query.id,
      userName,
    });
  };

  componentDidMount(): void {
    const socket = this.props.socket;
    const id = this.props.query.id;
    // const token = cookies.get("token");
    const token = this.props.cookies.token;
    const { userName } = token
      ? (jwt.decode(token) as {
          userId: string;
          userName: string;
        })
      : { userName: null };

    // if (token) {
    //   { userName } = jwt.decode(token) as {
    //     userId: string;
    //     userName: string;
    //   };
    // }

    // const userName = this.props.cookies.userName
    //   ? this.props.cookies.userName
    //   // @ts-ignore
    //   : this.props.kookie;

    if (userName) {
      // socket.on("connect", () => {
      socket.emit("board connect", {
        boardId: id,
        userName,
      });
      // });
    }

    window.addEventListener("beforeunload", this.unloadHandler);

    socket.emit("new board connection", { boardId: id });

    socket.on("fetch users", (usersArray: string[]) => {
      onlineUsers = usersArray;
      this.setState(this.state);
    });

    socket.on(
      "user connect",
      (incomingUser: { userName: string; onlineUsers: string[] }) => {
        onlineUsers = incomingUser.onlineUsers;
        this.setState(this.state);
        message.info(`User ${incomingUser.userName} is now seeing this board`);
      },
    );

    socket.on(
      "user disconnect",
      (incomingUser: { userName: string; onlineUsers: string[] }) => {
        onlineUsers = incomingUser.onlineUsers;
        this.setState(this.state);
        message.info(`User ${incomingUser.userName} has disconnected`);
      },
    );
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
    window.addEventListener("beforeunload", this.unloadHandler);

    this.props.socket.emit("board disconnect", {
      boardId: this.props.query.id,
      userName: this.props.userName || "",
    });

    this.props.socket.close();
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
                    <Post {...post} key={post.id} author={post.author} />
                  )}
                />

                <p>
                  Users seeing this board:{" "}
                  {onlineUsers.map((user, idx) => {
                    const separator =
                      idx === onlineUsers.length - 1 ? "" : ", ";
                    return (
                      <React.Fragment key={user}>
                        <Icon type="user" /> {`${user}${separator}`}
                      </React.Fragment>
                    );
                  })}
                </p>
              </>
            );
          }}
        </Query>

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
                    const token = this.props.cookies.token;
                    const { userName, userId } = token
                      ? (jwt.decode(token) as {
                          userId: string;
                          userName: string;
                        })
                      : { userName: null, userId: null };

                    const image = this.loadableCanvas.getSaveData();
                    await createPost({
                      variables: {
                        title: values.postTitle,
                        content: values.postContent,
                        boardId: id,
                        image,
                        userName,
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

// export default connect()(withCookies(Board));
export default connect()(Board);
