import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function myApp() {
  return (
    <div>
      <h1>Hello from home page | with Ganu</h1>
    </div>
  );
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to open google",
// };

const anotherUsername = "chai aurt react";
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_not",
  },
  "element is create which is create by react",
  anotherUsername
);

const anoitherElement = (
  <a href="https://google.com" target="_not">
    search google
  </a>
); // this is component

const newReactElement = React.createElement(
  "a",
  {
    href: "https://github.com",
    target: "_NUll",
  },
  "Guthub Repo"
);

// ReactDOM.createRoot(document.querySelector("#ganudon")).render(anoitherElement);
// ReactDOM.createRoot(document.querySelector("#ganudon")).render(reactElement);
ReactDOM.createRoot(document.querySelector("#ganudon")).render(newReactElement);
