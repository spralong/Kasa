import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Fiche_Logement from "./pages/Fiche_Logement";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Path correspond au chemin Url */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route path="/logement" element={<Fiche_Logement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
