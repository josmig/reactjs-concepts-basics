import './App.css';
import Saludar from './components/Saludar';


function App() {
  return (
    <div className="App">
      <h1>Aprendiendo REACT</h1>
      <Saludar name="Jose Miguel Pantigoso puraca" edad="23"/>
      <Saludar name="Jose Miguel Pantigoso puraca"/>
      
    </div>    
  );
}

export default App;
