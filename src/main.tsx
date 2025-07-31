import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App"
import {  MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
