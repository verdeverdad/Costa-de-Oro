import {  Routes, Route } from 'react-router-dom';
import Inicio from './App'
import Categorias from './categorias'
import Nosotros from './nosotros'

const Rutas = () => {
    return (
      
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/categorias" element={<Categorias />} />
        </Routes>
      
    );
  };
  
  
  export default Rutas;