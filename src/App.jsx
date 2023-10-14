import './App.css';
import Button from './components/Button/Button';
import Contatore from './components/Contatore/Contatore';
import Product from './components/Product/Product';
import { useState } from 'react';

// const App = () => {
function App() {
	const log = (logChild) => {
		console.log('HAI CLICCATO, SONO SUL PARENT ' + logChild);
	};

	const [isVisibleContatore, setIsVisibleContatore] = useState(true);

	const changeContatore = () => {
		setIsVisibleContatore((prevState) => !prevState);
	};

	const [result, setResult] = useState('Invalid message');

	const checkInput = (event) => {
		if (event.target.value.trim().length < 3) {
			setResult('Invalid message');
		} else {
			setResult('Valid message');
		}
	};

	return (
		<div className='App'>
			<header className='App-header'>
				{/* LA FUNCTION LOG SCRITTA QUI SOPRA AL PADRE, VIENE PASSATA COME PROPS AL FIGLIO CON IL NOME FUNCT*/}
				<Button funct={log}>CLICCAMI</Button>

				{isVisibleContatore ? <Contatore /> : null}

				<button onClick={changeContatore}>CONTATORE</button>

				<Product
					Title={'Product 1'}
					Price={10}
					Description={'First product'}
				/>
				<Product
					Title={'Product 2'}
					Price={20}
					Description={'Second product'}
				/>

				<form>
					<label>Your message</label>
					<input type='text' onChange={checkInput} />
					<p>{result}</p>
				</form>
			</header>
		</div>
	);
}

export default App;
