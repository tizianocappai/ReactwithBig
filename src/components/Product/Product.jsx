import React from 'react';

export default function Product(props) {
	const { title, price, description } = props;

	return (
		<article className='product'>
			<h2>{title}</h2>
			<p className='price'>${price}</p>
			<p>{description}</p>
		</article>
	);
}
