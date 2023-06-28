import { useState } from 'react';

export const HookUseState = () => {
	let username = 'Filipe';

	const [name, setName] = useState('Filipão');

	const changeNames = () => {
		username = 'Filipe Dervelan';

		setName('Filipão cara de melão');
		console.log(username);
	};
	// console.log(name);

	const [age, setAge] = useState(18);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(age);
	};

	return (
		<div>
			<h2>useState</h2>
			<p>Variável: {username}</p>
			<p>useState: {name}</p>
			<button onClick={() => changeNames()}>PÃO</button>
			<br />
			<br />
			<p>Digite sua idade</p>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={age}
					onChange={(e) => setAge(e.target.value)}
				/>
				<input type="submit" value="Enviar" />
			</form>
			<p>Você tem {age} anos!</p>
			<hr />
		</div>
	);
};
