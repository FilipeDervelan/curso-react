import { useReducer, useState } from 'react';

export const HookUseReducer = () => {
	const [number, dispatch] = useReducer((state, action) => {
		return Math.random(state);
	});

	const initialTasks = [
		{ id: 1, text: 'fazendo uma coisa' },
		{ id: 2, text: 'fazendo outra coisa' },
	];

	const taskReducer = (state, action) => {
		switch (action.type) {
			case 'ADD':
				const newTask = {
					id: Math.random(),
					text: taskText,
				};

				setTaskText('');

				return [...state, newTask];
			case 'DELETE':
				return state.filter((task) => task.id !== action.id);
			default:
				return state;
		}
	};

	const [taskText, setTaskText] = useState('');
	const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatchTasks({ type: 'ADD' });
	};

	const removeTask = (id) => {
		dispatchTasks({ type: 'DELETE', id });
	};

	return (
		<div>
			<h1>useReducer</h1>
			<p>Número: {number}</p>
			<button onClick={dispatch}>Alterar número</button>
			<br />
			<br />
			<h3>Tarefas:</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={(e) => setTaskText(e.target.value)}
					value={taskText}
				/>
				<input type="submit" value="Enviar" />
			</form>
			{tasks.map((task) => {
				return (
					<li key={task.id} onDoubleClick={() => removeTask(task.id)}>
						{task.text}
					</li>
				);
			})}
			<hr />
		</div>
	);
};
