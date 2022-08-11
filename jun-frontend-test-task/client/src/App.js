import './App.css';
import HorseRace from './pages/HorseRace';
import History from './pages/History';
import PageError from './pages/PageError';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {

  return (
    <div className="App">

        <Header />
        <div className='main'>
          <Routes>
            <Route path={'/'} element={<HorseRace/>} />
            <Route path={'/history'} element={<History/>} />
            <Route path={'/*'} element={<PageError/>} />
          </Routes>
        </div>
        <Footer />

    </div>
  );
}

export default App;
