import { combineReducers } from "redux";

// import reducers
import count from "./count/reducers";
import { reducer as announcement } from "./states/announcement/reducer";

export default combineReducers({ count, announcement });
