import { Dispatch } from "redux";

export const UPDATE_ANNOUNCEMENT = "UPDATE_ANNOUNCEMENT";

export const updateAnnouncement = (message: string) => dispatch => {
  return dispatch({ type: UPDATE_ANNOUNCEMENT, message });
};
