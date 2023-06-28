import { useEffect, useState } from 'react';

export const HookUseEffect = () => {
	useEffect(() => {
		console.log('Estou sendo executado');
	});

	const [number, setNumber] = useState(1);

	const changeNumber = () => {
		setNumber(number + 1);
	};

	//
	useEffect(() => {
		console.log('Serei executado apenas uma vez');
	}, []);

	//
	const [anotherNumber, setAnotherNumber] = useState(0);
	useEffect(() => {
		if (anotherNumber > 0) {
			console.log('Sou executado apenas quando o anotherNumber for mudado');
		}
	}, [anotherNumber]);

	//
	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		console.log('Hello World');
	// 		setAnotherNumber(anotherNumber + 1);
	// 	}, 2000);
	// 	return () => clearTimeout(timer);
	// }, [anotherNumber]);
	return (
		<div>
			<h2>useEffect</h2>
			<p>Number: {number}</p>
			<button onClick={changeNumber}>Executar</button>
			<p>Another number: {anotherNumber}</p>
			<button onClick={() => setAnotherNumber(anotherNumber + 1)}>
				mudar another number
			</button>
			<hr />
		</div>
	);
};
