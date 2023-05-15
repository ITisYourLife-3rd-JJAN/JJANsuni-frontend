import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import KidMain from './pages/KidMain';
import ParentMain from './pages/ParentMain';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Join from './pages/Join';


function App() {
  const pathName = window.location.pathname;

  if (pathName === "/join" || pathName === "/login") {
    return (
      <div>
        <BrowserRouter>
          <Routes>
              <Route path="/join" element={<Join/> }/>  
              <Route path="/login" element={<Login/> }/>  
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
  
  else {
    return (
      <div>
        <BrowserRouter>
          <Header/>
          
          <Routes>
            <Route path="/" element={<Intro/> }/>  
            <Route path="/kid" element={<KidMain/> }/>  
            <Route path="/parent" element={<ParentMain/> }/>  
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
