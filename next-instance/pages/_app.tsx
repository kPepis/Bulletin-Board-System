import { ApolloClient } from "apollo-boost";
import App, { Container, NextAppContext } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";

import withData from "../lib/withData";

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
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
