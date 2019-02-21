import { Layout, Menu } from "antd";
import { ApolloClient } from "apollo-boost";
import * as jwt from "jsonwebtoken";
import withRedux from "next-redux-wrapper";
import App, { Container, NextAppContext } from "next/app";
import Link from "next/link";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { CookiesProvider, Cookies } from "react-cookie";
import { Provider } from "react-redux";
import { Store } from "redux";
import io from "socket.io-client";
// import Cookies from "universal-cookie";

import withData from "../lib/withData";
import initStore from "../lib/withReduxSaga";

const { Sider, Content } = Layout;
const cookies = new Cookies();

interface IProps {
  apollo: ApolloClient<any>;
  store: Store;
}

export interface GlobalAppState {
  socket: SocketIOClient.Socket;
  userName?: string;
  userId?: string;
}

class MyApp extends App<IProps, GlobalAppState> {
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

  componentDidMount() {
    const token = cookies.get("token");

    if (token) {
      console.log(token);
      const { userId, userName } = jwt.verify(
        token,
        "LALALALA",
      ) as {
        userId: string;
        userName: string;
      };

      this.setState({ userId, userName });
    }
  }

  state = {
    socket: io(),
    userName: cookies.get("userName"),
    userId: cookies.get("userId"),
  };

  render() {
    const { Component, pageProps, apollo, store } = this.props;
    const userName = this.state.userName;
    return (
      <Container>
        <Provider store={store}>
          <ApolloProvider client={apollo}>
            <CookiesProvider>
              <Layout hasSider={true}>
                <Sider collapsible collapsedWidth={50} theme="dark">
                  <div className="logo" />
                  <Menu theme="dark" mode="inline">
                    <Menu.Item>
                      {userName ? (
                        <Link href="/me">
                          <a>My profile</a>
                        </Link>
                      ) : (
                        <Link href="/login">
                          <a>Login</a>
                        </Link>
                      )}
                    </Menu.Item>

                    {!userName ? (
                      <Menu.Item>
                        <Link href="/">
                          <a>Sign up</a>
                        </Link>
                      </Menu.Item>
                    ) : (
                      <Menu.Item>
                        <Link href="/logout">
                          <a>Log out</a>
                        </Link>
                      </Menu.Item>
                    )}

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
            </CookiesProvider>
          </ApolloProvider>
        </Provider>
      </Container>
    );
  }
}

// export default withRedux(initStore)(MyApp);
export default withRedux(initStore)(withData(MyApp));
// export default withData(MyApp);
