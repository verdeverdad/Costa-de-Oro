import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './home'
import OffcanvasExample from './categorias'
import Nos from './nosotros'

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nos />} />
            <Route path="/categorias" element={<OffcanvasExample />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )

}

export default App;
