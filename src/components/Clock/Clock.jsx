import './Clock.css';
import { useEffect, useState } from 'react';

const Clock = () => {
	const [seconds, setSeconds] = useState(new Date().getSeconds());
	const [minutes, setMinutes] = useState(new Date().getMinutes());
	const [hours, setHours] = useState(new Date().getHours());

	useEffect(() => {
		setInterval(() => {
			const date = new Date();
			setSeconds(date.getSeconds());
			setMinutes(date.getMinutes());
			setHours(date.getHours());
		}, 1000);
	}, []);

	return (
		seconds &&
		minutes &&
		hours && (
			<div className='clock'>
				{hours} : {minutes} : {seconds}
			</div>
		)
	);
};

export default Clock;
