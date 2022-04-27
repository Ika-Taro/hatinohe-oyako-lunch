
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Route, BrowserRouter} from "react-router-dom"
import {PageA} from "./PageA"
import {PageB} from "./PageB"

// ルーティングの実装
const Index= () =>  {
  return (
    <BrowserRouter>
          <Route exact path="/PageA">
            <PageA />
          </Route>
          <Route path="/PageB">
            <PageB />
          </Route>
    </BrowserRouter>
  )
}

// ReactDom.render((
//   <BrowserRouter>
//     <Index />
//   </BrowserRouter>
//   ), document.getElementById('index'));

ReactDom.render(<Index />, document.getElementById('index'));