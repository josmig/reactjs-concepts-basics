import './App.css';
import Saludar from './components/Saludar';


function App() {

  const user = {
    nombre:'Miguel Pantigoso',
    edad:23,
    color:'Azul'
  }

  return (
    <div className="App">
      <h1>Aprendiendo REACT</h1>
      {/* <Saludar name="Jose Miguel Pantigoso puraca" edad="23"/> */}
      <Saludar userInfo={user}/>
      
    </div>    
  );
}

export default App;
