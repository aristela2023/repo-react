
import './App.css';

import Menu from './Menu'
import Artista from './Artista'

function App() {
  return (
    <>
    <Menu/>
    <div className="container pt-5 mt-5">
        
     <h2>Inicio</h2>
     <p> Bienvenido a mi pagina de artistas favoritos :D aqui almacenare</p>

  <Artista nombre="Dire Straits" 
  img="/imagen/lacienciadelosnumeros.jpg"
  descripcion="Dire Straits" /> 
  <Artista nombre="The Who" 
  img="/imagen/lacienciadelosnumeros.jpg"
  descripcion="Dire Straits"/>
  <Artista nombre="Jack Johnson"
  img="/imagen/lacienciadelosnumeros.jpg"
  descripcion="Dire Straits" />

    </div>
    </>
  );
}

export default App;
