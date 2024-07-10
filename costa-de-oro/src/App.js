import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './inicio.js'
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

       <Inicio></Inicio>
      </div>
    </>
  )

}



export default App;
