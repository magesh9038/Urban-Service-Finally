import { combineReducers } from "redux";
import user from "./user";
import Profile from "./profile"
import dealer from "./dealer";
export default combineReducers({
    user,Profile
})