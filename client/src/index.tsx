import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import App from "./components/App/App";
import "./index.css";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

export const history = createBrowserHistory();
export const minWidthWindow = 990;
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
