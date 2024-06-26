import styles from './EditPost.module.css';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';

export const EditPost = () => {
	const { id } = useParams();
	const { document: post } = useFetchDocument('posts', id);

	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [body, setBody] = useState('');
	const [tags, setTags] = useState([]);
	const [formError, setFormError] = useState('');

	useEffect(() => {
		if (post) {
			setTitle(post.title);
			setBody(post.body);
			setImage(post.image);

			const textTags = post.tagsArray.join(', ');
			setTags(textTags);
		}
	}, [post]);

	const { user } = useAuthValue();

	const { updateDocument, response } = useUpdateDocument('posts');

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormError('');

		try {
			new URL(image);
		} catch (error) {
			setFormError('A imagem precisa ser uma URL.');
		}

		const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

		if (!title || !image || !tags || !body) {
			setFormError('Preencha todos os campos.');
		}

		if (formError) return;

		const data = {
			title,
			image,
			body,
			tagsArray,
			uid: user.uid,
			createdBy: user.displayName,
		};

		updateDocument(id, data);

		navigate('/dashboard');
	};

	return (
		<div className={styles.edit_post}>
			{post && (
				<>
					<h2>{post.title}</h2>
					<p>Editing post</p>
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
						<p className={styles.preview_title}>Image preview</p>
						<img className="img_preview" src={post.image} alt={post.title} />
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
							<button className="btn">Edit</button>
						) : (
							<button className="btn" disabled>
								Wait...
							</button>
						)}
						{response.error && <p className="error">{response.error}</p>}
						{formError && <p className="error">{formError}</p>}
					</form>
				</>
			)}
		</div>
	);
};
