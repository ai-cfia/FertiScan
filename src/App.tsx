import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import JsonPage from "./Pages/JsonPage/Json";
import NoPage from "./Pages/NoPage/NoPage";
import "./App.css";
import Header from "./Components/Header/Header";
import FormPage from "./Pages/FormPage/FormPage";
import { StrictMode, useEffect } from "react";
import ConfirmPage from "./Pages/ConfirmPage/ConfirmPage";
import SideMenu from "./Components/SideMenu/SideMenu";
import SettingPage from "./Pages/SettingPage/SettingPage";
import i18next from "i18next";

function App() {
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    i18next.changeLanguage(storedLanguage || "en");
  }, []);

  return (
    <BrowserRouter>
      <StrictMode>
        <Header />
        <SideMenu />
      </StrictMode>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />

          <Route path="Json" element={<JsonPage />} />
          <Route path="Form" element={<FormPage />} />
          <Route path="Confirm" element={<ConfirmPage />} />
          <Route path="Settings" element={<SettingPage />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
