import { combineReducers } from "redux";
import { photoReducer } from "./photoReducer";

export default combineReducers({
    photo: photoReducer
});
