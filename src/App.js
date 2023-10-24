
import './App.css';

import InicioPagina from './paginas/InicioPagina';
import ContactoPagina from './paginas/ContactoPagina';
import ArtistaPagina from './paginas/ArtistaPagina';
import LanzamientosPagina from './paginas/LanzamientosPagina';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Menu from './Componente/Menu'

function App() {
  return (
    <>
    <Router>
    <Menu/>
    <div className="container pt-5 mt-5">


    
       <Routes>
        <Route path="/" element={<InicioPagina />} />
        <Route path="/contacto" element={<ContactoPagina />} />
        <Route path="/artista" element={<ArtistaPagina />} />
        <Route path="/lanzamientos" element={<LanzamientosPagina />} />
       </Routes>
         
    </div>
    </Router>
    </>
  );
}

export default App;
