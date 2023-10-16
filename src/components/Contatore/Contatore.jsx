import { useEffect, useState } from 'react';

export default function Contatore() {
	//let contatore = 0;
	const [contatore, setContatore] = useState(0); //inizializzo variabile a 0

	const incrementa = () => {
		//contatore = contatore+1;
		setContatore((prevState) => prevState + 1);
	};

	const decrementa = () => {
		//contatore = contatore-1;
		setContatore((prevState) => prevState - 1);
	};

	const handleOnResize = () => {
		console.log('on resize');
	};

	// corrispettivo di onInit in angular
	useEffect(() => {
		console.log('init Componente Contatore');
		window.addEventListener('resize', handleOnResize);
		console.log('addEventListener agganciato con successo');
	}, []);

	// corrispettivo di onInit in angular + onChange sulle dipendenze
	useEffect(() => {
		console.log('valore di contatore aggiornato', contatore);
	}, [contatore]);

	useEffect(() => {
		return () => {
			console.log('componente contatore distrutto!');
			window.removeEventListener('resize', handleOnResize);
		};
	}, []);

	return (
		<>
			{' '}
			{/* JSX fragment */}
			<span>{contatore}</span>
			<button onClick={incrementa}>+</button>{' '}
			<button onClick={decrementa}>-</button>
		</>
	);
}
