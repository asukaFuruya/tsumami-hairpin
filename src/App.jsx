import "./App.css";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Logo from "./logo";
import MainPage from "./pages/MainPage";
import MakingPage from "./pages/MakingPage";
import News_20250519 from "./pages/News_20250519";
import News_20250409 from "./pages/News_20250409";
import News_20250313 from "./pages/News_20250313";
import Form from "./pages/Form";
import Confirm from "./pages/Confirm";
import Complete from "./pages/complete";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Logo />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/making" element={<MakingPage showButton={true} />} />
        <Route path="/news_20250519" element={<News_20250519 />} />
        <Route path="/news_20250409" element={<News_20250409 />} />
        <Route path="/news_20250313" element={<News_20250313 />} />
        <Route path="/form" element={<Form />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
