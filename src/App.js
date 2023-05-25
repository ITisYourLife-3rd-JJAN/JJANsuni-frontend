import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import KidMain from './pages/KidMain';
import ParentMain from './pages/ParentMain';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Join from './pages/Join';
import Map from './pages/Map';
import MissionList from './pages/MissionList';
import Mission from './pages/Mission';
import SolvedMission from './pages/SolvedMission';
import KidProfile from './pages/KidProfile';
import DebitHistory from './pages/DebitHistory';
import ParentCard from './pages/ParentCard';
import Debit from './pages/Debit';
import DirectDebit from './pages/DirectDebit';
import Pay from './pages/Pay';
import Message from './pages/Message';
import ParentMission from './pages/ParentMission';
import ParentProfile from './pages/ParentProfile';

import Roulette from './components/event/Roulette';
import EventGPT from './pages/EventGPT';
import EventResult from './pages/EventResult';

function App() {
  
    return (
      <div>
        <BrowserRouter>
          <Routes>
              <Route path="/join" element={<Join/> }/>  
              <Route path="/login" element={<Login/> }/>  
              <Route path="/" element={<Intro/> }/>  
              <Route path="/kid" element={<KidMain/> }/>  
              <Route path="/kid/profile" element={<KidProfile/>} />
              <Route path="/parent" element={<ParentMain/> }/>  
              <Route path="/parent/profile" element={<ParentProfile/>} />
              <Route path="/kid/map" element={<Map/>} />
              <Route path="/kid/map/:mapId" element={<MissionList/>} />
              <Route path="/kid/map/:mapId/mission/:missionId" element={<Mission/>} />
              <Route path="/kid/solution/:missionId" element={<SolvedMission/>} />
              <Route path="/debit-history" element={<DebitHistory/> }/>  
              <Route path="/card" element={<ParentCard/> }/> 
              <Route path="/debit" element={<Debit/> }/>  
              <Route path="/direct-debit" element={<DirectDebit/> }/>  
              <Route path="/pay" element={<Pay/> }/>  
              <Route path="/message" element={<Message/> }/>  
              <Route path="/parent/mission-history" element={<ParentMission/> }/>  
              <Route path="/event" element={<EventGPT/>}/>
              <Route path="/event-result" element={<EventResult/>}/>
              <Route path="/event-rouletee" element={<Roulette/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );


}

export default App;
