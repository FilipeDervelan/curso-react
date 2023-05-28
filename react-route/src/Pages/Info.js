import { useParams } from 'react-router-dom';

export const Info = () => {
	const { id } = useParams();

	return (
		<div>
			<h1>Mais informações do produto: {id}</h1>
		</div>
	);
};
