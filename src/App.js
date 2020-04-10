import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

//components
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import Menu from "./components/Menu.js";
import About from "./components/About.js";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="col-lg-12 page__wrap">
          <Menu/>
          <Header/>
          <Switch>
            <Route component={Home} path="/" exact/>
            <Route component={About} path="/om_meg"/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
