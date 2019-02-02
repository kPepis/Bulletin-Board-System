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
