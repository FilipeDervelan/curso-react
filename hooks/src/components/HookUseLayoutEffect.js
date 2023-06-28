import { useEffect, useLayoutEffect, useState } from 'react';

export const HookUseLayoutEffect = () => {
	const [name, setName] = useState('Algum nome');

	useEffect(() => {
		console.log('2');
		setName('Mudou de novo!');
	}, []);

	useLayoutEffect(() => {
		console.log('1');
		setName('Outro nome');
	});

	console.log(name);

	return (
		<div>
			<h1>useLayoutEffect</h1>
			<p>Nome: {name}</p>
			<hr />
		</div>
	);
};
