import './App.css';
import Pesek from './Dog';
import {a} from "./random";
import {b} from "./random";
import {sum as zbroji} from "./random";
import * as SVE from './random';

function App() {
  return (
    <div className="App">
      <p>{Pesek.ime}</p>
      <p>{Pesek.pasmina}</p>
      <p>{Pesek.boja}</p>
      <p>{a}</p>
      <p>{b}</p>
      <p>{zbroji(SVE.a, SVE.b)}</p>
    </div>
  );
}

export default App;
