import styles from './Dashboard.module.css';

import { Link } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

export const Dashboard = () => {
	const { user } = useAuthValue();
	const uid = user.uid;

	const { documents: posts, loading } = useFetchDocuments('posts', null, uid);

	return (
		<div>
			<h1>dashshhh</h1>
			<p>manage your posts</p>
			{posts && posts.length === 0 ? (
				<div className={styles.noposts}>
					<p>Posts not found</p>
					<Link to="/posts/create" className="btn">
						Create first post
					</Link>
				</div>
			) : (
				<div>
					<p>postsss</p>
				</div>
			)}

			{posts && posts.map((post) => <h3 key={post.id}>{post.title}</h3>)}
		</div>
	);
};
