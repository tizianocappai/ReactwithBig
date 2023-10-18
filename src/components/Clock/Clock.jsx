import { useEffect, useMemo, useState } from 'react';

// const Clock = () => {
// 	const [seconds, setSeconds] = useState(null);
// 	const [minutes, setMinutes] = useState(null);
// 	const [hours, setHours] = useState(null);

// 	useEffect(() => {
// 		setInterval(() => {
// 			const date = new Date();
// 			setSeconds(date.getSeconds());
// 			setMinutes(date.getMinutes());
// 			setHours(date.getHours());
// 		}, 1000);
// 	}, []);

// 	return (
// 		<div>
// 			<span>
// 				{hours} : {minutes} : {seconds}
// 			</span>
// 		</div>
// 	);
// };

const Clock = () => {
	const [date, setDate] = useState(new Date());
	const seconds = useMemo(() => {
		return date.getSeconds();
	}, [date]);

	const minutes = useMemo(() => {
		return date.getMinutes();
	}, [date]);

	const hours = useMemo(() => {
		return date.getHours();
	}, [date]);

	useEffect(() => {
		setInterval(() => {
			setDate(new Date());
		}, 1000);
	}, []);

	return (
		<div>
			<span>
				{hours} : {minutes} : {seconds}
			</span>
		</div>
	);
};

export default Clock;
