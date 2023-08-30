import React from "react";

import { Routes, Route } from "react-router-dom";
import About from "./components/ui/Screens/About/About";
import Home from "./components/ui/Screens/Home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
};

export default App;
