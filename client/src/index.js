import React from "react";
import ReactDOM from "react-dom";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import store from "./store";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

TimeAgo.addDefaultLocale(en);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
