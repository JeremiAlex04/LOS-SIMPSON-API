import { useEffect, useState } from "react";
import simpsonbg from "./assets/img/fondo.webp";


function App() {
  //Contenedor de los componentes
  const [personajes, setpersonajes] = useState([]);  
  
  //Cargar los personajes
  const getpersonajes = async () => {
    const response = await fetch("https://thesimpsonsapi.com/api/characters");
    const data = await response.json();
    setpersonajes(data.results);
    //Mostrar en consola
    console.log(data.results);
  }

  useEffect(()=> {
    getpersonajes();
  }, [])

  //URL de la imagen
  const CDN_BASE = "https://cdn.thesimpsonsapi.com/500";

  return (
    <div style={{backgroundImage: {simpsonbg}, minHeight: '100vh', backgroundSize: 'cover', padding: '20px'}}>
    {/*Agregar la imagen de assets*/}

      <h1 className="text-center">PERSONAJES DE LOS SIMPSON</h1>
      <div className="row">
        {personajes.map((personaje) => (
          <div className="col-sm-3 mb-4">
          <div className="card" style={{width: "18rem"}} key={personaje.id}>
            <img src={`${CDN_BASE}${personaje.portrait_path}`} alt={personaje.name} />
            <h5 className="card-title text-center">{personaje.name}</h5>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
