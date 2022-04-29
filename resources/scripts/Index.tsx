import  React from 'react';
import  ReactDom from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {App} from "./App"

const Content = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDom.render((
    <Content />
  ), document.getElementById('app'))