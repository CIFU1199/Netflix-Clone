import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import Netflix from './pages/Netflix'; 
import Player from './pages/Player';
import Movies from './pages/Movies';
import Series from './pages/Series';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/singup" element={<SingUp/>} />
          <Route exact path="/player" element={<Player/>} />
          <Route exact path="/movies" element={<Movies/>} />
          <Route exact path="/tv" element={<Series/>} />
          <Route exact path="/" element={<Netflix/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
