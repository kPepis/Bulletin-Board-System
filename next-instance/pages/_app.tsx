import { Icon, Layout, Menu } from "antd";
import { ApolloClient } from "apollo-boost";
import App, { Container, NextAppContext } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import Link from "next/link";
import withData from "../lib/withData";

const { Sider, Content } = Layout;

interface IProps {
  apollo: ApolloClient<any>;
}

class MyApp extends App<IProps> {
  static async getInitialProps(context: NextAppContext) {
    const { Component, ctx } = context;

    // let pageProps = {};

    // if (Component.getInitialProps) {
    //   pageProps = await Component.getInitialProps(ctx)
    // }

    const pageProps =
      typeof (Component as any).getInitialProps === "function"
        ? await (Component as any).getInitialProps(ctx)
        : {};

    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
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
                <Component {...pageProps} />
              </Content>
            </Layout>
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
