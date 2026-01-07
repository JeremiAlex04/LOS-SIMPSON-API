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

  useEffect(() => {
    getpersonajes();
  }, [])


  //URL de la imagen
  const CDN_BASE = "https://cdn.thesimpsonsapi.com/500";

  return (
    <div className="container-fluid" style={{ backgroundColor: 'rgb(0,191,255)', width: 'auto', height: 'auto' }}>
      {/*Agregar la imagen de assets*/}

      <div className="h-5 w-auto">
        <img src={logo} alt="logo de simpson" className="img-fluid mx-auto d-block" style={{ width: '40%', height: 'auto' }} />
      </div>

      <div className="row">
        {personajes.map((personaje) => (
          <div className="col-sm-3 mb-4 d-flex justify-content-center" key={personaje.id}>
            {/*Tarjeta*/}
            <div className="card shadow rounded" style={{ width: "18rem", border: "4px solid #000000ff" }} key={personaje.id}>
              <img className="card-img-top" src={`${CDN_BASE}${personaje.portrait_path}`} alt={personaje.name} />
              <div className="card-body bg-light">
                <h5 className="card-title text-center" style={{ color: '#d4be41ab' }}>{personaje.name}</h5>
                {/*Datos personales*/}
                <h6 className="card-subtitle mb-2 text-black text-center">Genero: {personaje.gender == "Male" ? "Masculino" : "Femenino"}</h6>
                <h6 className="card-subtitle mb-2 text-black text-center">Edad: {personaje.age == null ? "No hay registro" : personaje.age + " años"}</h6>
              </div>
              <div className="card-footer text-center">
                <small className="text-body text-center">
                  Estado: {personaje.status == "Alive" ? "Vivo" : "Fallecido"}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
