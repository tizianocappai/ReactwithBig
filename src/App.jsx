import { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/Loader/Loader';
import Post from './components/Post/Post';
import MOCK_POSTS from './data/posts.mock';
import Orologio from './components/Orologio/Orologio';
import Contatore from './components/Contatore/Contatore';


function App() {

	const [dataPosts, setDataPosts] = useState(null);

	 const fetchData = async () => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts');
			const data = await response.json();
		  	console.log('data', data);
		  	setDataPosts(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	if(!dataPosts) return <Loader />

	return (
		<div className='App'>

			{/* LA FUNCTION SCRITTA E' UN ALTERNATIVA ALL'IF SRITTO SOPRA*/}
			{/* !dataPosts ? <Loader /> : <Contatore /> */} 


			{/* mostrare orologio a schermo con span, vedere setTimeout e setInterval */}
			{/* TODO: come cambiare propriea del body ? (flex ecc) */}
			<Orologio />

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
		</div>
	);
}

export default App;
