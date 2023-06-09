import { Link } from 'react-router-dom';
import styles from './Home.module.css';

import { useState } from 'react';

export const Home = () => {
	const [query, setQuery] = useState('');
	const [posts] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className={styles.home}>
			<h1>See our recently posts</h1>
			<form onSubmit={handleSubmit} className={styles.search_from}>
				<input
					type="text"
					placeholder="Search for tags..."
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="btn btn-dark">Search</button>
			</form>
			<h1>Posts</h1>
			{posts && posts.length === 0 && (
				<div className={styles.noposts}>
					<p>Posts not found</p>
					<Link to="/posts/create" className="btn">
						Create first post
					</Link>
				</div>
			)}
		</div>
	);
};
