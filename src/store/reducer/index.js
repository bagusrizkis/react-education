import { combineReducers } from "redux";

import countReducers from "./count";
import userReducers from "./user";

export default combineReducers({
    dataCount: countReducers,
    dataUser: userReducers,
});
