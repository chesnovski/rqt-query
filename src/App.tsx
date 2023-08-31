import React from "react";

import { Routes, Route } from "react-router-dom";
import About from "./components/ui/Screens/About/About";
import Home from "./components/ui/Screens/Home/Home";
import SearchMenu from "./components/ui/Screens/SearchMenu/SearchMenu";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/searchcoin" element={<SearchMenu />}></Route>
      </Routes>
    </>
  );
};

export default App;
