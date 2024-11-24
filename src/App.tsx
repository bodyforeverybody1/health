import { AppWrapper } from "./styled.root.ts";
import { Analytics } from "@vercel/analytics/react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThanksPage from "./pages/Thanks";
import NoPage from "./pages/NoPage";
import { Layout } from "./components/Layout";
import MainPage from "./pages/Main";

function App() {
  return (
    <>
      <AppWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="thanks" element={<ThanksPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppWrapper>
      <Analytics />
    </>
  );
}

export default App;
