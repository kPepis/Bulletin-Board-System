import { Action } from "redux";

import * as announcementActions from "./actions";
import { IAnnouncement } from "./state";

const initialState: IAnnouncement = {
  message: "No announcements",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case announcementActions.UPDATE_ANNOUNCEMENT:
      return Object.assign({}, state, { message: action.message });
    default:
      return state;
  }
};
