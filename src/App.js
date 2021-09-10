import React, { useState } from 'react';
import './App.css';
import Saludar from './components/Saludar';


function App() {

  const user = {
    /* nombre:'Miguel Pantigoso', */
    edad:23,
    color:'Azul'
  }
  //pasando funciones entre componentes
  const saludo= (nombre ="pepe", edad=10) => {
    //templates literales
    console.log(`Hola ${nombre} tengo ${edad} años`);
  }

  //Utilizando Hooks
  const[estadoCarro, setStateCar] = useState(false);

  const  estado = () => {
    /* console.log("Encender / Apagar"); */
    //Con esto cogemos el valor 
    /* setStateCar(!estadoCarro); */
    //con esto cogemos el valor del estado actual
    setStateCar(prevValue => !prevValue )
  }
  return (
    <div className="App">
      <h1>Aprendiendo REACT</h1>
      {/* <Saludar name="Jose Miguel Pantigoso puraca" edad="23"/> */}
      <Saludar userInfo={user} saludar={saludo}/>
      <h3>El coche esta : {estadoCarro ? "Encendido" : "Apagado"}</h3>
      <button onClick={estado}>Encender/Apagar</button>
    </div>    
  );
}

export default App;
