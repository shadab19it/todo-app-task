import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

// context import
import { GlobalProvider } from "./context/context";
import { initialState } from "./context/reducer";
import reducer from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider initialState={initialState} reducer={reducer}>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
