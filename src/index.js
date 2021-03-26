import React, { useState } from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput";
import "./styles.css";

const App = () => {
  // 길이 validate
  const maxLen = value => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">\
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);