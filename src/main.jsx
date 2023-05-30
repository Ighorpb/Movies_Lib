import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter, // Fornece o contexto de roteamento.
  Routes, // É o contêiner para definir as rotas.
  Route, // Mapeia caminhos de URL para componentes.
} from "react-router-dom";

//importação do App e das pages.
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'

import './index.css' // Importação do estilo.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
