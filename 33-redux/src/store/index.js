import {combineReducers} from "redux";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
    // key : value
    counter: counterReducer
});

export default rootReducer;