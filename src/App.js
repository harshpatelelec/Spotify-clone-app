import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';
import Menu from './component/Menu';
import Music from './component/Music';
import Pnf from './component/Pnf';
import Track from './component/Track';
import Contact from './component/Contact';



function App() {
  return (
    <BrowserRouter>
     <Menu />
     
     <Routes>
        <Route path={`/`} element={<Music />} />
        <Route path={`/track/:artistId`} element={<Track />} />
        <Route path={`/contact`} element={<Contact />} />
        <Route path={`/*`} element={<Pnf />} />
        
             </Routes>
    </BrowserRouter>
  );
}

export default App;
