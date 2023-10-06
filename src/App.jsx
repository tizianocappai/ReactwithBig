import './App.css';
import Logo from './components/Logo/Logo';
import Link from './components/Link/Link';
import Button from './components/Button/Button';
import Contatore from './components/Contatore/Contatore';
import { useState } from 'react';

// const App = () => {
function App() {

  const log = (logChild) => {
    console.log('HAI CLICCATO, SONO SUL PARENT ' + logChild);
}

const [isVisibleContatore, setIsVisibleContatore] = useState(true);

const changeContatore = () => {
  setIsVisibleContatore(prevState => !prevState)
}

  return (
    <div className="App">
      <header className="App-header">

        { /* LA FUNCTION LOG SCRITTA QUI SOPRA AL PADRE, VIENE PASSATA COME PROPS AL FIGLIO CON IL NOME FUNCT*/ }
        <Button funct={log}> 
          CLICCAMI
        </ Button>

        {isVisibleContatore ? <Contatore /> : null}
        
        <button onClick={changeContatore}>CONTATORE</button>

      </header>
    </div>
  );
}

export default App;
