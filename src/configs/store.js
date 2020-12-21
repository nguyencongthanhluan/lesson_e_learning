import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import course from "../redux/reducers/course";
import thunk from "redux-thunk";
import credentials from "../redux/reducers/credentials";

//create root reducer
const reducer = combineReducers({
  course,
  credentials,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
