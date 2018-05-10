// @flow
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const el = document.getElementById("root");

if (!el) {
  throw new Error("root element is unset");
}

ReactDOM.render(<App />, el);
