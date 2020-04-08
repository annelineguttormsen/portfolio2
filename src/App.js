import React from 'react';

//components
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Footer from "./components/Footer.js";
import Menu from "./components/Menu.js";

function App() {
  return (
    <div className="App">
      <div className="page__wrap">
        <Menu/>
        <Header/>
        {/* gjør om til router */}
        <Hero/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
