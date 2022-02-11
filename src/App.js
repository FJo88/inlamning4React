import Atm from "./components/Atm"
import './App.css';
import {useState} from "react"

function App() {

  const[start, setStart] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
      <h1>React ATM-inlämningsuppgift 4</h1>
      </header>
      <button onClick={()=> {setStart(!start)}} className="start">{start ? "Close ATM": "Start ATM"}</button>
      {start ? <Atm/>: null}
      <footer><strong>Copyright Filip J</strong></footer>
    </div>
  );
}

export default App;
