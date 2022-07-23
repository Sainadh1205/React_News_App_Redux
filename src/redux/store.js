import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { newsReducer } from "./news/reducer.js";
import reduxThunk from 'redux-thunk'

let rootReducer = combineReducers({
  news: newsReducer
});

let store = createStore(rootReducer, applyMiddleware(reduxThunk,createLogger()));

export default store;
