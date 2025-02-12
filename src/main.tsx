import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ModalProvider } from "./context/ModalProvider.tsx";
import "./fonts/BebasNeueBold.ttf";
import "react-international-phone/style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>,
);
