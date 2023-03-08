import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Boutique from "./pages/Boutique";
import Conditions from "./pages/Conditions";
import Contact from "./pages/Contact";
import Envois from "./pages/Envois";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import Politique from "./pages/Politique";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/politique" element={<Politique />} />
        <Route path="/envois" element={<Envois />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
