import { useEffect, useState } from "react";

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


  return (
    <div className="body">
      <h1 className="h1">Personajes de Los Simpson</h1>
      <ul>
        {personajes.map((personaje) => (
          <li key={personaje.id} >
          {personaje.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
