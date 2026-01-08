import { useEffect, useState } from "react";
import fondo from "./assets/img/fondo1.jpg";
import logo from "./assets/img/logo.svg";
import { Modal } from "bootstrap";


function App() {
  //Contenedor de los componentes
  const [personajes, setpersonajes] = useState([]);

  //Modal para mostrar informacion
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);
  const [mostrar, setMostrar] = useState(false);


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


  const mostrarAño = (fecha) => {
    // Obtener el año actual
    let hoy = new Date();
    let añoActual = hoy.getFullYear();

    //Para obtener el año de una fecha
    let fechaObj = new Date(fecha);
    let añoEspecifico = fechaObj.getFullYear();

    return añoEspecifico;
  }

  //Calcular la año de nacimiento 
  const calAñoNac = (edad) => {

    if (edad == null) {
      return "No hay registro"
    } else {
      //Obtener el año actual
      let hoy = new Date();
      let añoActual = hoy.getFullYear();
      let añoNac = añoActual - edad;
      return añoNac;
    }
  }




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



          <div className="col-12 col-md-4 col-lg-3 p-2 d-flex justify-content-center " key={personaje.id}>
            {/*Tarjeta*/}
            <div className="card shadow rounded" style={{ width: "18rem", border: "4px solid #000000ff" }} key={personaje.id}>
              <img className="card-img-top" src={`${CDN_BASE}${personaje.portrait_path}`} alt={personaje.name} />
              <div className="card-body bg-light">
                <h5 className="card-title text-center" style={{ color: '#004094ff' }}>{personaje.name}</h5>
                {/*Boton para mostrar mas informacion*/}
                <div className="text-center">
                  <button className="btn btn-warning text-black" onClick={() => { setPersonajeSeleccionado(personaje); setMostrar(true) }} > Mas Informacion</button>
                </div>


              </div>
            </div>
          </div>
        ))}

        {/*Modal*/}
        {personajeSeleccionado && (
          <Modal>
            <Modal.Header closeButton>
              <Modal.Title>Informacion Adicional</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              {/*Datos personales*/}
              <h6 className="card-subtitle mb-2 text-black text-center">Genero: {personaje.gender == "Male" ? "Masculino" : "Femenino"}</h6>
              <h6 className="card-subtitle mb-2 text-black text-center">Edad: {personaje.age == null ? "No hay registro" : personaje.age + " años"}</h6>
              <h6 className="card-subtitle mb-2 text-black text-center">Fecha de Nacimiento: {personaje.birthdate == null ? calAñoNac(personaje.age) : mostrarAño(personaje.birthdate)}</h6>
            </Modal.Body>
            <Modal.Footer>
              <small className="text-body text-center">
                Estado: {personaje.status == "Alive" ? "Vivo" : "Fallecido"}
              </small>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default App
