import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import './Articles.css';
import Modal from '../Modal/Modal';
import { createPortal } from 'react-dom';

const Articles = () => {
	const [articles, setArticles] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [articleBody, setArticleBody] = useState(null);

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

	const openModal = (article) => {
		setShowModal(true);
		setArticleBody(article.body);
	}

	return (
		<>
			<h3>Articoli</h3>
			<ul className='articles-list'>
				{articles.map((article, index) => (
					<li onClick={() => openModal(article)} key={index} className='articles-list__item'>
						<span className='articles-list__item-number'>
							{article.id}
						</span>
						<span className='articles-list__item-title'>
							{article.title}
						</span>
					</li>
				))}
			</ul>

			{showModal && createPortal(
				<Modal articleBody={articleBody} onClose={() => setShowModal(false)} />,
				/*document.getRootNode('/.app-container')*/
				document.body)
			}

			{/* CREARE COMPONENTE X FARE UNA MODALE CHE SI APRE AL CLICK SUL SINGOLO ARTICOLO E VIENE AGGANCIATA AD UN NODO DIVERSO RISPETO A QUELLO DOVE SI TROVA(BODY IDROOT)*/}
			
			
		</>
	);
};
export default Articles;
