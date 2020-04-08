import React from 'react';

//components
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import Menu from "./components/Menu.js";

function App() {
  return (
    <div className="App">
      <div className="page__wrap">
        <Menu/>
        <Header/>
        {/* gjør om til router */}
        <Home/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
