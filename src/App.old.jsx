import './App.css';
import Button from './components/Button/Button';
import Contatore from './components/Contatore/Contatore';
import Product from './components/Product/Product';
import Loader from './components/Loader/Loader';
import Post from './components/Post/Post';
import MOCK_POSTS from './data/posts.mock';

import { useState } from 'react';

// const App = () => {
function App() {
	const log = (logChild) => {
		console.log('HAI CLICCATO, SONO SUL PARENT ' + logChild);
	};

	const dataPosts = MOCK_POSTS;

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
					title={'Product 1'}
					price={10}
					description={'First product'}
				/>
				<Product
					title={'Product 2'}
					price={20}
					description={'Second product'}
				/>

				<form>
					<label>Your message</label>
					<input type='text' onChange={checkInput} />
					<p>{result}</p>
				</form>
			</header>

			<section>
				<ul className='post-list'>
					{dataPosts.map((post, index) => {
						return (
							<li key={index}>
								<Post
									id={post.id}
									title={post.title}
									body={post.body}
								/>
							</li>
						);
					})}
				</ul>
			</section>

			<Loader />
		</div>
	);
}

export default App;
