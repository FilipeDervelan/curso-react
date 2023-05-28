import { Link } from 'react-router-dom';
import styles from './About.module.css';

export const About = () => {
	return (
		<div className={styles.about}>
			<h2>
				About the My <span>Blog</span>
			</h2>
			<p>
				This project it's an blog maded with React on Front-end and Firebase on
				Back-end.
			</p>
			<Link to="/posts/create" className="btn">
				New post
			</Link>
		</div>
	);
};
