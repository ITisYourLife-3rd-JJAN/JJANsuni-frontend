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
import KidProfile from './pages/KidProfile';
import DebitHistory from './pages/DebitHistory';
import ParentCard from './pages/ParentCard';
import Debit from './pages/Debit';
import DirectDebit from './pages/DirectDebit';
import Pay from './pages/Pay';
import Message from './pages/Message';


function App() {
  
    return (
      <div>
        <BrowserRouter>
          <Header/>       
          <Routes>
              <Route path="/join" element={<Join/> }/>  
              <Route path="/login" element={<Login/> }/>  
              <Route path="/" element={<Intro/> }/>  
              <Route path="/kid" element={<KidMain/> }/>  
              <Route path="/kid/profile" element={<KidProfile/>} />
              <Route path="/parent" element={<ParentMain/> }/>  
              <Route path="/kid/map" element={<Map/>} />
              <Route path="/kid/map/:mapId" element={<MissionList/>} />
              <Route path="/kid/mission/:missionId" element={<Mission/>} />
              <Route path="/debit-history" element={<DebitHistory/> }/>  
              <Route path="/card" element={<ParentCard/> }/> 
              <Route path="/debit" element={<Debit/> }/>  
              <Route path="/direct-debit" element={<DirectDebit/> }/>  
               <Route path="/pay" element={<Pay/> }/>  
              <Route path="/message" element={<Message/> }/>  
          </Routes>
        </BrowserRouter>
      </div>
    );


}

export default App;
