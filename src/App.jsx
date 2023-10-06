import './App.css';
import Logo from './components/Logo/Logo';
import Link from './components/Link/Link';
import Button from './components/Button/Button';

// const App = () => {
function App() {

  const log = (logChild) => {
    console.log('HAI CLICCATO, SONO SUL PARENT ' + logChild);
}

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link href="https://reactjs.org" rel="noopener noreferrer" >
          <div>
            <p> CIAO MONDO</p>
          </div>
          <Logo />  
        </Link>

        { /* LA FUNCTION LOG SCRITTA QUI SOPRA AL PADRE, VIENE PASSATA COME PROPS AL FIGLIO CON IL NOME FUNCT*/ }
        <Button funct={log}> 
          CLICCAMI
        </ Button>

      </header>
    </div>
  );
}

export default App;
