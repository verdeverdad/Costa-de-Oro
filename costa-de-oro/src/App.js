import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/home';
import Animales from './paginas/animales';
import Cultura from './paginas/cultura';
import Educacion from './paginas/educacion';
import Gastronomia from './paginas/gastronomia';
import Gratiferia from './paginas/gratiferia';
import LaComunidad from './paginas/nosotros';
import Perfil from './paginas/perfil';
import Servicios from './paginas/servicios';
import Trabajos from './paginas/trabajos';
import Trueques from './paginas/trueques';
import Mercado from './paginas/ventas';
import Viajes from './paginas/viajes';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<LaComunidad />} />
            <Route path="/animales" element={<Animales />} />
            <Route path="/cultura" element={<Cultura />} />
            <Route path="/educacion" element={<Educacion/>} />
            <Route path="/gastronamia" element={<Gastronomia />} />
            <Route path="/gratiferia" element={<Gratiferia />} />
            <Route path="/perfil" element={<Perfil/>} />
            <Route path="/servicios" element={<Servicios/>} />
            <Route path="/trabajos" element={<Trabajos />} />
            <Route path="/trueques" element={<Trueques />} />
            <Route path="/ventas" element={<Mercado />} />
            <Route path="/viajes" element={<Viajes />} />


          </Routes>
        </BrowserRouter>

      </div>
    </>
  )

}

export default App;
