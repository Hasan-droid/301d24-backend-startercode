 import  { Component } from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Fav from './components/Fav';
 import Home from './components/Home';
 import Header from './components/Header';
 import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
 class App extends Component {
   render() {
     return (
       <div>
         <Header/>
         <Router>
         <Switch>
          <Route path="/fav">
            <Fav/>
          </Route>
         
          <Route path="/">
            <Home />
          </Route>
        </Switch>
         </Router>
       </div>
     )
   }
 }
 
 export default App
 