// import logo from './logo.jpg';
import Navbar from './Custom/Navbar';
import TextForm from './Custom/TextForm';
import './App.css';
import React from 'react';
import About from './Custom/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar title="BilixUtils" />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm Heading="Enter the Text to Analyze" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
