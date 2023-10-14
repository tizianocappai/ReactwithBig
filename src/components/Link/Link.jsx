//export default function Link({href, rel}) { destruttrizzare oggetto
//console.log(href + rel);

export default function Link(props) {
	//console.log(props.href + props.rel);

	console.log(props);
	const { href = 'pippo', rel, children } = props; // inizializzo con Pippo e se presente nelle props aggiorno valore

	return (
		<a className='App-link' href={href} target='_blank' rel={rel}>
			{children}
		</a>
	);
}
