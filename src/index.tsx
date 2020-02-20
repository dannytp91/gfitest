import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import { Provider } from "react-redux";
import * as ReactDOM from "react-dom";
import store from "./store/store";

// @components
import App from "./App";

// @styles
import "./assets/styles/global.scss";

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("app")
);