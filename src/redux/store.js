import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import post from "./modules/post";

const middleware = [thunk];
const rootReducer = combineReducers({ post });
const enhancer = applyMiddleware(...middleware);
const store = createStore(rootReducer, enhancer);

export default store;
