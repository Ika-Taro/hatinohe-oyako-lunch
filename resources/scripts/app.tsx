import  React, { useState, useEffect } from "react";
import {Route, Routes} from "react-router-dom";
import {
  Blog
} from "./Pages";
// import BlogEdit from "./BlogEdit"
import Register from './Register';
import Login from './Login';
import axios from 'axios';

// axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});
// axios.interceptors.request.use(
//   (config) => {
//     if (config.headers && !config.headers.Authorization) {
//       const token = localStorage.getItem("authToken");

//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Blog />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  );
  }
