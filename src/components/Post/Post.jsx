import './Post.css';

export default function Post(props) {
	const { userId, id = 1, title = 'Prova', body = 'Prova' } = props;

	return (
		<div className='post'>
			<div className='post-number'>{id}</div>
			<div className='post-content'>
				<h3 className='post-title'>{title}</h3>
				<p className='post-description'>{body}</p>
			</div>
		</div>
	);
}
