import "../lib/dummy.css";
import "../lib/dummy.less";

import { Icon, Layout, Menu } from "antd";
import { ApolloClient } from "apollo-boost";
import App, { Container, NextAppContext } from "next/app";
import Link from "next/link";
import React from "react";
import { ApolloProvider } from "react-apollo";
import io from "socket.io-client";

import withData from "../lib/withData";

const { Sider, Content } = Layout;

interface IProps {
  apollo: ApolloClient<any>;
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
    console.log("state", this.state);
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
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
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
      </Container>
    );
  }
}

export default withData(MyApp);
