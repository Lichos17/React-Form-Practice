import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/styles/customclasses.css";
import MainRouter from "./router/MainRouter";
import { AppContextProvider } from "./context/appContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <MainRouter />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
