import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import anecdoteReducer, {
  initializeAnecdotes
} from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import filterReducer from "./reducers/filterReducer";
import anecdoteService from "../src/services/anecdotes";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  anecdote: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
/*
anecdoteService.getAll().then(anecdotes => {
  //console.log(anecdotes)
  store.dispatch(initializeAnecdotes(anecdotes));
});
*/
export default store;
