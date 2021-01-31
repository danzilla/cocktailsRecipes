import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
// Reducers
import fetchReducers from "./reducers/fetchReducers";
// DevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// Create Store
const store = createStore(fetchReducers, composeWithDevTools(
    applyMiddleware(thunk),
  ));
// Store
export default store;