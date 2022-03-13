import logo from './logo.svg';
import './App.css';
import {Grocery} from "./components/Grocery";
import {Stopwatch} from "./components/Stopwatch"
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true)

  return (

    <div className="App">
      {/* < Grocery /> */}
      {show ? <Stopwatch/> : ""}

      <button onClick={() => {
        setShow(show ? false:true)
        // setShow(!show)
      }}> {show ? "Hide Timer" : "Show Timer"}</button>
    </div>
  );
}

export default App;
