import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

function App() {
	const [menuState, setMenuState] = useState(false);

	function handleMenuState(value) {
		setMenuState(value);
	}

	return (
		<div className='app-container'>
			<Header handleClick={handleMenuState} />
			<Menu isOpen={menuState} handleClick={handleMenuState} />
		</div>
	);
}

export default App;
