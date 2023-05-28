// import { useContext } from 'react';

import { useCounterContext } from '../hooks/useCounterContext';

// import { CounterContext } from '../context/CounterContext';

export const Product = () => {
	// const { counter } = useContext(CounterContext);

	const { counter } = useCounterContext();

	return (
		<div>
			<h1>Product</h1>
			<p>Valor do contador: {counter}</p>
		</div>
	);
};
