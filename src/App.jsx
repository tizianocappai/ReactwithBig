import { useEffect, useState } from 'react';
import './App.css';
import Clock from './components/Clock/Clock';
import Loader from './components/Loader/Loader';
import Post from './components/Post/Post';
import MOCK_POSTS from './data/posts.mock';

function App() {
	const [dataPosts, setDataPosts] = useState(null);

	const fetchData = async () => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts',
			);
			const data = await response.json();
			console.log('data', data);
			setDataPosts(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (!dataPosts) return <Loader />;

	return (
		<div className='App'>
			{/* <section>
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
			</section> */}
			<Clock></Clock>
		</div>
	);
}

export default App;
