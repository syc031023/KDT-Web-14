import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isVisibleReducer from "./isVisibleReducer";
import bankReducer from "./bankReducer";

const rootReducer = combineReducers({
    // key : value
    counter : counterReducer,
    isVisible: isVisibleReducer,
    bank: bankReducer,
});

export default rootReducer;