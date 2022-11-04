import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// translations
import { I18nextProvider } from "react-i18next";
import { ItemProvider } from "./Context/cartContext";

import "./index.css";
import "antd/dist/antd.min.css";
import { GlobalProvider } from "./Context/globalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ItemProvider>
      <GlobalProvider>
        <I18nextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </I18nextProvider>
      </GlobalProvider>
    </ItemProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
