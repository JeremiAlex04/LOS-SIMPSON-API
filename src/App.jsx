import { useEffect, useState } from "react";
import fondo from "./assets/img/fondo1.jpg";
import logo from "./assets/img/logo.svg";


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
    <div className="container-fluid" style={{backgroundColor: 'rgb(0,191,255)', width:'auto', height: 'auto'}}>
    {/*Agregar la imagen de assets*/}

      <div className="h-5 w-auto">
        <img src={logo} alt="logo de simpson" className="img-fluid mx-auto d-block" style={{width:'40%', height:'auto'}} />
      </div>
      
      <div className="row">
        {personajes.map((personaje) => (
          <div className="col-sm-3 mb-4 d-flex justify-content-center" key={personaje.id}>
          <div className="card" style={{width: "18rem", border: "4px solid #000000ff"}} key={personaje.id}>
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
