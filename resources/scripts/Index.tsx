import  React from 'react';
import  ReactDom from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {App} from "./app"


const Content = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDom.render((
    <Content />
  ), document.getElementById('app'))

