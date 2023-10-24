import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import './Articles.css';

const Articles = () => {
	const [articles, setArticles] = useState(null);

	useEffect(() => {
		fetch('https://dummyjson.com/posts')
			.then((response) => response.json())
			.then((data) => {
				console.log('data', data);
				const { posts } = data;
				setArticles(posts);
			});
	}, []);

	if (!articles) {
		return <Loader />;
	}

	return (
		<>
			<h3>Articoli</h3>
			<ul className='articles-list'>
				{articles.map((article, index) => (
					<li key={index} className='articles-list__item'>
						<span className='articles-list__item-number'>
							{article.id}
						</span>
						<span className='articles-list__item-title'>
							{article.title}
						</span>
					</li>
				))}
			</ul>
		</>
	);
};
export default Articles;
