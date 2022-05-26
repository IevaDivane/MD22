import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Pages/home/Home';
import PokemonPage from './Pages/pokemonPage/PokemonPage';
import PokemonsPage from './Pages/pokemonsPage/PokemonsPage';

const App = () => {
  useEffect(() => {
    document.title = 'Pokemon Page';
  });
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<PokemonsPage />} />
          <Route path="/pokemon/:name" element={<PokemonPage />} />
        </Routes>
      </Router>
      <div />
    </div>
  );
};
export default App;
