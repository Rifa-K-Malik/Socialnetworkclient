import React from 'react';
import Navbar from './component/navbar/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/screens/home/Home';
import Signup from './component/screens/signup/Signup';
import Login from './component/screens/Login/Login';
import Prof from './component/screens/Pro/Prof';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/profile" element={<Prof/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
