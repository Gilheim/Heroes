
import { useState } from "react";
import "./App.css";
import * as Pages from "./pages";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";


function App() {
  return(
    <>
      <Routes>
        <Route path="/" element = {<Header/>}>
          <Route index element = {<Pages.Homepage />} />
          <Route path="/heroes" element = {<Pages.Heroespage />} />
          <Route path="/heroes/:id" element = {<Pages.Heropage />} />
          <Route path="/search" element = {<Pages.Searchpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
