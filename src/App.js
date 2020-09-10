import React from 'react';
import './App.css';
import Header from './component/header';
import About from './component/about';
import Resume from './component/resume';
import Portfolio from './component/portfolio';
import Services from './component/services';
import Contact from './component/contact'
import PortfolioDetails from './component/portfolio-details';

function App() {
  return (
    <div className="App">
    <Header />
    <About />
    <Resume />
    <Portfolio />
    <Services />
    <Contact />
    <PortfolioDetails />

    </div>
  );
}

export default App;
