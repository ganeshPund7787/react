import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";
import ColorSwitcher from "./ColorSwitcher";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorSwitcher />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
