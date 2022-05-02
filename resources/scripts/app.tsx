import  React from 'react';
import {Route, Routes} from "react-router-dom";
import {
  Home,
  Blog
} from "./Pages";
import BlogEdit from "./BlogEdit"

export function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blog" element={<Blog />}/>
          {/* <Route path='/blog/edit/:id' component={BlogEdit} /> */}
      </Routes>
    </div>
  );
  }
