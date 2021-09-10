import './App.css';
import Saludar from './components/Saludar';


function App() {

  const user = {
    /* nombre:'Miguel Pantigoso', */
    edad:23,
    color:'Azul'
  }
  //pasando funciones entre componentes
  const saludo= (nombre ="pepe") => {
    console.log(`Hola ${nombre}`);
  }
  return (
    <div className="App">
      <h1>Aprendiendo REACT</h1>
      {/* <Saludar name="Jose Miguel Pantigoso puraca" edad="23"/> */}
      <Saludar userInfo={user} saludar={saludo}/>
      
    </div>    
  );
}

export default App;
