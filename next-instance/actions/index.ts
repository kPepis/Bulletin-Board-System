import { ActionCreator } from "redux";

export const addOnlineUser: ActionCreator<{ userName: string }> = user => {
  return {
    type: "ADD_ONLINE_USER",
    payload: user,
  };
};
