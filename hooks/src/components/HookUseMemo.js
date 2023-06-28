import { useMemo } from 'react';
import { useState, useEffect } from 'react';

export const HookUseMemo = () => {
	const [number, setNumber] = useState();

	// const premiumNumbers = ['0', '100', '200'];

	const premiumNumbers = useMemo(() => {
		return ['0', '100', '200'];
	}, []);

	useEffect(() => {
		console.log('Premium numbers foi alterado!');
	}, [premiumNumbers]);

	return (
		<div>
			<h1>useMemo</h1>
			<input type="text" onChange={(e) => setNumber(e.target.value)} />
			{premiumNumbers.includes(number) ? <p>Acertou o número</p> : ''}
			<hr />
		</div>
	);
};
