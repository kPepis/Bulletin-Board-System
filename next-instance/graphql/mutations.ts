import gql from "graphql-tag";

export const CREATE_BOARD_MUTATION = gql`
  mutation CREATE_BOARD_MUTATION(
    $name: String!
    $description: String!
    $userName: String!
  ) {
    createBoard(name: $name, description: $description, userName: $userName) {
      id
      name
      description
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation CREATE_POST_MUTATION(
    $title: String!
    $content: String!
    $boardId: String!
    $image: String!
  ) {
    createPost(
      title: $title
      content: $content
      boardId: $boardId
      image: $image
    ) {
      title
      content
    }
  }
`;

export const ADD_ONLINE_USER = gql`
  mutation ADD_ONLINE_USER($userName: String!, $boardId: String!) {
    addOnlineUser(userName: $userName, boardId: $boardId) {
      usersOnline {
        userName
      }
    }
  }
`;

export const REMOVE_ONLINE_USER = gql`
  mutation REMOVE_ONLINE_USER($userName: String!, $boardId: String!) {
    removeOnlineUser(userName: $userName, boardId: $boardId) {
      usersOnline {
        userName
      }
    }
  }
`;
