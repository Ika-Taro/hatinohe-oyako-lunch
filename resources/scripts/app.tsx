import React from "react";
import {Route, Routes} from "react-router-dom";
import {
  Home,
  Blog
} from "./Pages";

export function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blog" element={<Blog />}/>
      </Routes>
    </>
  )
}
