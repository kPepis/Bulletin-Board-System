import gql from "graphql-tag";
import { perPage } from "../config";

export const GET_BOARDS_QUERY = gql`
  query GET_BOARDS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    boards(skip: $skip, first: $first, orderBy: id_DESC) {
      id
      name
      description
      posts {
        id
      }
    }
  }
`;

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    boardsConnection {
      aggregate {
        count
      }
    }
  }
`;

export const SINGLE_BOARD_QUERY = gql`
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
      usersOnline {
        userName
      }
    }
  }
`;

export const BOARD_ONLINE_USERS_QUERY = gql`
  query BOARD_ONLINE_USERS_QUERY($id: ID!) {
    board(where: { id: $id }) {
      usersOnline {
        userName
      }
    }
  }
`;
