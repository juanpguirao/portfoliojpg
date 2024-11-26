import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import About from './About';
import Proyectos from './Proyectos';
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Proyectos/>
        <Footer/>
    </div>
  );
}

export default App;
