import { useState } from 'react';
import './App.css';
import Clock from './components/Clock/Clock';
import Articles from './components/Articles/Articles';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

function App() {
	const [menuState, setMenuState] = useState(false);
	const [componentToShow, setComponentToShow] = useState('Clock');

	function handleMenuState(value) {
		setMenuState(value);
	}

	function renderComponent() {
		switch (componentToShow) {
			case 'Clock':
				return <Clock></Clock>;
			case 'Articles':
				return <Articles></Articles>;
			default:
				return <>Seleziona un componente dal menu</>;
		}
	}

	return (
		<div className='app-container'>
			<Header handleClick={handleMenuState} />
			<Menu
				isOpen={menuState}
				handleClose={handleMenuState}
				handleComponentToShow={(value) => setComponentToShow(value)}
			/>
			{renderComponent()}
		</div>
	);
}

export default App;

// #1 Renderizzare usando il portal il dettaglio di ogni articolo
// #2 tramite il context trigerrare tema scuro e bianco
// #3 implementare una sezione dove poter pubblicare un articolo con il form e la successiva preview (utilizzare useRef)
