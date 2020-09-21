import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './Fakedata/data.json'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components /Navbar/Navbar'
import Slide from './Components /Slide/Slide';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  
  return (
    <div className="App">
     <Navbar></Navbar>
     <Slide></Slide>
    </div>
  );
}

export default App;
