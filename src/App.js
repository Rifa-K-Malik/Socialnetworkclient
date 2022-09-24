import React, { createContext, useEffect, useReducer } from 'react';
import Navbar from './component/navbar/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './component/screens/home/Home';
import Signup from './component/screens/signup/Signup';
import Login from './component/screens/Login/Login';
import Prof from './component/screens/Pro/Prof';
import CreatePost from './component/screens/create/CreatePost';
import { initialState, reducer } from './reducer/userReducer';

export const UserContext = createContext();

const Routing = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
      navigate('/')
    }else{
      navigate('/signin')
    }
  },[]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/profile" element={<Prof />} />
      <Route path="/create" element={<CreatePost />} />
    </Routes>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
