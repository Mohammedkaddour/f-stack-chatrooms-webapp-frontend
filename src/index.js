import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import {BrowserRouter} from "react-router-dom"
import * as serviceWorker from "./serviceWorker";

let reducer = function(state, action) {
  if(action.type==="token"){
    return{...state, token: action.token}
  }
  return state; // Needed because react-redux calls your reducer with an @@init action
};

const store = createStore(
  reducer, // reducer
  {}, // initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let content = (
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(content, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
