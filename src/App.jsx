import './App.css';
import Loader from './components/Loader/Loader';
import Post from './components/Post/Post';
import MOCK_POSTS from './data/posts.mock';

function App() {
	const dataPosts = MOCK_POSTS;

	return (
		<div className='App'>
			<Loader />

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
