import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProviders } from "./providers/UserContext";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { TechProvider } from "./providers/TechContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProviders>
        <TechProvider>
          <App />
          <GlobalStyle />
        </TechProvider>
      </UserProviders>
    </BrowserRouter>
  </React.StrictMode>
);
