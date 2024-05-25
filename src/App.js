import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About.js';
import Home from './routes/Home.js';
import Navigation from './compnents/Navigation.js';
import Detail from './routes/Detail.js';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movie-detail' element={<Detail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
