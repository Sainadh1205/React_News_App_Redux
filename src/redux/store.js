import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { countReducer } from "./count/reducer.js";
import { showReducer } from "./show/reducer.js";
import { newsReducer } from "./news/reducer.js";
import reduxThunk from "redux-thunk"

let rootReducer = combineReducers({
  count: countReducer,
  show: showReducer,
  news: newsReducer
});

let store = createStore(rootReducer, applyMiddleware(reduxThunk,createLogger()));

export default store;
