import { Action, combineReducers } from "redux";

interface User {
  userName: string;
}

interface customAction extends Action {
  payload: User;
}

const usersOnlineReducer = (
  usersOnline: User[] = [],
  action: customAction,
): any => {
  switch (action.type) {
    case "ADD_ONLINE_USER":
      if (usersOnline.some(user => user.userName === action.payload.userName)) {
        return usersOnline;
      }

      return [...usersOnline, action.payload.userName];
    default:
      return usersOnline;
  }
};

export default combineReducers({ onlineUsers: usersOnlineReducer });
