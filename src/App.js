import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChorePage from './components/ChorePage';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Chore from './components/Chore';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chores/list' element={<ChorePage />} />
        <Route path='/chores/list/:id/' element={<Chore />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/log-in' element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
