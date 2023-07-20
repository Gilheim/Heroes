import { useState } from "react";
import "./App.css";
import * as Pages from "./pages";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Pages.Homepage />} />
        <Route path="/heroes" element={<Pages.HeroesPage />} />
        <Route path="/hero/:id" element={<Pages.HeroPage />} />
        <Route path="/search" element={<Pages.Searchpage />} />
      </Routes>
    </>
  );
}

export default App;
