import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// translations
import i18n from "./translation/i18n";
import { I18nextProvider } from "react-i18next";
import { ItemProvider } from "./itemContext/itemContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ItemProvider>
      <I18nextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </ItemProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
