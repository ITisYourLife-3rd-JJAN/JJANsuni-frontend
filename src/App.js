import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import KidMain from './pages/KidMain';
import ParentMain from './pages/ParentMain';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Join from './pages/Join';
import Map from './pages/Map';
import MissionList from './pages/MissionList';
import Mission from './pages/Mission';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header> </Header>
        <Routes>
          <Route path="/" element={<Intro/> }/>  
          <Route path="/join" element={<Join/> }/>  
          <Route path="/login" element={<Login/> }/>  
          <Route path="/kid" element={<KidMain/> }/>  
          <Route path="/parent" element={<ParentMain/> }/>  
          <Route path="/kid/map" element={<Map/>} />
          <Route path="/kid/map/:mapId" element={<MissionList/>} />
          <Route path="/kid/mission/:missionId" element={<Mission/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
