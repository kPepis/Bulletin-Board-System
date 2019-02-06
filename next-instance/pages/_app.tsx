import "../lib/dummy.css";
import "../lib/dummy.less";

import { Icon, Layout, Menu } from "antd";
import { ApolloClient } from "apollo-boost";
import App, { Container, NextAppContext } from "next/app";
import Link from "next/link";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import { Store } from "redux";
import io from "socket.io-client";

import withData from "../lib/withData";
import initStore from "../lib/withReduxSaga";
import withRedux from "next-redux-wrapper";

const { Sider, Content } = Layout;

interface IProps {
  apollo: ApolloClient<any>;
  store: Store;
}

interface IState {
  socket?: SocketIOClient.Socket;
}

class MyApp extends App<IProps, IState> {
  static async getInitialProps(context: NextAppContext) {
    const { Component, ctx } = context;

    const pageProps =
      typeof (Component as any).getInitialProps === "function"
        ? await (Component as any).getInitialProps(ctx)
        : {};

    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  state = {
    socket: io(),
  };

  componentDidMount() {
    // connect to WS server and listen event
    // const socket = io();
    // this.setState({ socket });
    this.state.socket.emit("userConnection");
  }

  componentDidUpdate() {}

  // close socket connection
  componentWillUnmount() {
    this.state.socket.off("userConnection");
    console.log("A user has disconnected");
    this.state.socket.close();
  }

  render() {
    const { Component, pageProps, apollo, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <ApolloProvider client={apollo}>
            <Layout hasSider={true}>
              <Sider collapsible collapsedWidth={50} theme="dark">
                <div className="logo" />
                <Menu theme="dark" mode="inline">
                  <Menu.Item>
                    <Icon type="user" />
                    <span>My profile</span>
                  </Menu.Item>

                  <Menu.Item>
                    <Link href="/">
                      <a>Registration</a>
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link href="/boards">
                      <a>Boards</a>
                    </Link>
                  </Menu.Item>
                </Menu>
              </Sider>

              <Layout>
                <Content>
                  <Component {...pageProps} socket={this.state.socket} />
                </Content>
              </Layout>
            </Layout>
          </ApolloProvider>
        </Provider>
      </Container>
    );
  }
}

// export default withRedux(initStore)(MyApp);
export default withRedux(initStore)(withData(MyApp));
// export default withData(MyApp);
