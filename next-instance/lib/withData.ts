import ApolloClient from "apollo-boost";
import withApollo from "next-with-apollo";

import { endpoint } from "../config";

console.log(
  `Apollo connecting to GraphQl server on ${process.env.YOGA_ENDPOINT}`,
);

function createClient({ headers }: any) {
  return new ApolloClient({
    // uri: endpoint,
    uri: "http://aba71e790353911e9805202e2fc72533-1589081296.us-east-2.elb.amazonaws.com:4000/",
    request: async operation => {
      operation.setContext({
        // fetchOptions: {
        //   credentials: "include",
        // },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
