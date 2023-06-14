import { useParams } from 'react-router-dom';
import styles from './Post.module.css';
import { useFetchDocument } from '../../hooks/useFetchDocument';

export const Post = () => {
	const { id } = useParams();
	const { document: post, loading } = useFetchDocument('posts', id);

	return (
		<div className={styles.post_container}>
			{loading && <p>Loading post...</p>}
			{post && (
				<>
					<h1>{post.title}</h1>
					<img src={post.image} alt={post.title} />
					<p>{post.body}</p>
					<h3>This is post is about:</h3>
					<div className={styles.tags}>
						{post.tagsArray.map((tag) => (
							<p key={tag}>
								<span>#</span>
								{tag}
							</p>
						))}
					</div>
				</>
			)}
		</div>
	);
};
