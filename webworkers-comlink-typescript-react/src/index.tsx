import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { wrap } from "comlink";

function testWorker() {
  console.log("testing worker");
  const worker = new Worker("./zk-cra-worker", {
    name: "zk-cra-worker",
    type: "module",
  });
  const workerApi = wrap<import("./zk-cra-worker").ZKCRAWorker>(worker);
  workerApi.test();
  workerApi.init();
}
testWorker();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
