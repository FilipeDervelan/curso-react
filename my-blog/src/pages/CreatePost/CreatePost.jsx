import styles from './CreatePost.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';

export const CreatePost = () => {
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [body, setBody] = useState('');
	const [tags, setTags] = useState([]);
	const [formError, setFormError] = useState('');

	const { user } = useAuthValue();

	const { insertDocument, response } = useInsertDocument('posts');

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormError('');

		insertDocument({
			title,
			image,
			body,
			tags,
			uid: user.uid,
			createdBy: user.displayName,
		});
	};

	return (
		<div className={styles.createPost}>
			<h2>Create Post</h2>
			<p>Write about you think and share your moments!</p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Title:</span>
					<input
						type="text"
						name="title"
						required
						placeholder="Think in a good title"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</label>
				<label>
					<span>Image URL:</span>
					<input
						type="text"
						name="image"
						required
						placeholder="Insert an image to represent your post"
						onChange={(e) => setImage(e.target.value)}
						value={image}
					/>
				</label>
				<label>
					<span>Content:</span>
					<textarea
						name="body"
						placeholder="Insert the content"
						onChange={(e) => setBody(e.target.value)}
						value={body}
					></textarea>
				</label>
				<label>
					<span>Tags:</span>
					<input
						type="text"
						name="tags"
						placeholder="Insert tags to your post"
						onChange={(e) => setTags(e.target.value)}
						value={tags}
					/>
				</label>
				{!response.loading ? (
					<button className="btn">Register</button>
				) : (
					<button className="btn" disabled>
						Wait...
					</button>
				)}
				{response.error && <p className="error">{response.error}</p>}
			</form>
		</div>
	);
};
