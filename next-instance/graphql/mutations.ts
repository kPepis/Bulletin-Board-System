import gql from "graphql-tag";

export const CREATE_BOARD_MUTATION = gql`
  mutation CREATE_BOARD_MUTATION($name: String!, $description: String!, $userName: String!) {
    createBoard(name: $name, description: $description, userName: $userName) {
      id
      name
      description
    }
  }
`;
