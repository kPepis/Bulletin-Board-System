import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { ApolloClient } from "apollo-boost";
import withRedux from "next-redux-wrapper";
import App, { Container, NextAppContext } from "next/app";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import { Store } from "redux";
import io from "socket.io-client";

import withData from "../lib/withData";
import initStore from "../lib/withReduxSaga";

Router.onRouteChangeComplete = () => {
  if (process.env.NODE_ENV !== "production") {
    const els = document.querySelectorAll(
      'link[href*="/_next/static/css/styles.chunk.css"]',
    );
    const timestamp = new Date().valueOf();
    els[0].href = "/_next/static/css/styles.chunk.css?v=" + timestamp;
  }
};

// HACK: Reload CSS in development
//       Remove when this issue is resolved:
//       https://github.com/zeit/next-plugins/issues/282
function initializeCssHack() {
  if (process.env.NODE_ENV == "production") return;
  const href = "/_next/static/css/styles.chunk.css";
  Router.events.on("routeChangeComplete", () => {
    const css = document.querySelector(`link[href^="${href}"]`);
    const newCss = css.cloneNode();
    newCss.href = `${href}?c=${Date.now()}`;
    newCss.onload = () => css.remove();
    css.parentNode.appendChild(newCss);
  });
}

initializeCssHack();

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
                    {pageProps.userName ? (
                      <Link href="/me">
                        <a>My profile</a>
                      </Link>
                    ) : (
                      <Link href="/login">
                        <a>Login</a>
                      </Link>
                    )}
                  </Menu.Item>

                  {!pageProps.userName ? (
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
          </ApolloProvider>
        </Provider>
      </Container>
    );
  }
}

// export default withRedux(initStore)(MyApp);
export default withRedux(initStore)(withData(MyApp));
// export default withData(MyApp);
