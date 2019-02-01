import { Affix, Button, List, Modal } from "antd";
import { FormComponentProps } from "antd/lib/form";
import gql from "graphql-tag";
import { NextContext } from "next";
import Head from "next/head";
import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import CanvasDraw, { DrawingCanvas } from "react-canvas-draw";
import { connect } from "react-redux";
import { PacmanLoader } from "react-spinners";
import { bindActionCreators, Dispatch } from "redux";

import Post, { PostProps } from "../components/Post";
import PostForm from "../components/PostForm";
import { countDecrease, countIncrease } from "../lib/count/actions";
import { updateAnnouncement } from "../lib/states/announcement/actions";
import withReduxSaga from "../lib/withReduxSaga";
import Websocket from "react-websocket";
// import io from "socket.io-client";

interface SingleBoardProps {
  socket: SocketIOClient.Socket;
  query: {
    id: string;
  };
  announcementMessage: string;
  updateAnnouncement: any;
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

class Board extends Component<SingleBoardProps, SingleBoardState> {
  static async getInitialProps(ctx: NextContext) {
    const { query } = ctx;

    return { query };
  }

  state: SingleBoardState = {
    modalVisible: false,
    modalLoading: false,
    formValid: false,
  };

  componentDidMount(): void {
    this.props.socket.emit("board connect", this.props.query.id);
  }

  showModal: () => void = () => {
    // this.props.updateAnnouncement("Announcement changed!");
    console.log(this.props.updateAnnouncement);
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

  handleWS(data) {
    // let result = JSON.parse(data);
    console.log("event", data);
    console.log("json", JSON.parse(data));
  }

  componentWillUnmount(): void {
    this.props.socket.emit("board disconnect", this.props.query.id);
  }

  render() {
    const id = this.props.query.id;
    const { announcementMessage, updateAnnouncement } = this.props;

    const listFooter = (
      <Affix offsetBottom={10}>
        <Button type="primary" onClick={this.showModal} htmlType="button">
          Publish new post
        </Button>
        <Websocket
          url="ws://localhost:3000/socket.io/?EIO=3&transport=websocket"
          onMessage={this.handleWS.bind(this)}
          onOpen={() => console.log("WS open")}
          onClose={() => console.log("WS close")}
          debug={true}
        />
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
