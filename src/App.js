import logo from './logo.svg';
//import List from "./components/List";
import './App.css';

function App() {
  
  const numbers = ["Walking", "coding", "laughing"];
    //const listItems = numbers.map((number) =>
  

  return (
    
    
    <div className="App">
     
    
     <a href={ "https://tuwaiq.edu.sa/" }>  <button> click  </button> </a>
     
     <h2>It is {new Date().toLocaleTimeString()}.</h2>
     
     <li>{numbers[0]}</li>
     <li>{numbers[1]}</li>
     <li>{numbers[2]}</li>
    
    </div>

    
  );
}

export default App;
