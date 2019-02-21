import gql from "graphql-tag";
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signOut {
      id
      userName
    }
  }
`;

class Logout extends Component {
  render() {
    return (
      <Mutation mutation={SIGN_OUT_MUTATION}>
        {async (signOut, { loading, error }) => {
          return <p>lol</p>
          // if (loading) {
          //   return <p>Loading...</p>;
          // }
          //
          // const result = await signOut();
          // console.log(cookies.getAll());
          // cookies.remove("token");
          // cookies.remove("userId");
          // cookies.remove("userName");
          //
          // if (error) {
          //   return <p>Error logging out</p>;
          // }
          //
          // return <p>You have logged out correctly</p>;
        }}
      </Mutation>
    );
  }
}

export default Logout;
