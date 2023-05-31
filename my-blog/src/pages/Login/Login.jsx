import styles from './Login.module.css';

import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

export const Login = () => {
	const [email, setemail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const { login, error: authError, loading } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();

		setError('');

		const user = {
			email,
			password,
		};

		const res = await login(user);

		console.log(res);
	};

	useEffect(() => {
		if (authError) {
			setError(authError);
		}
	}, [authError]);
	return (
		<div className={styles.login}>
			<h1>Log In</h1>
			<p>Log in to make posts and share with your friends </p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Email:</span>
					<input
						type="email"
						name="email"
						required
						placeholder="User e-mail"
						value={email}
						onChange={(e) => setemail(e.target.value)}
					/>
				</label>
				<label>
					<span>Password:</span>
					<input
						type="password"
						name="password"
						required
						placeholder="User password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				{!loading ? (
					<button className="btn">Log In</button>
				) : (
					<button className="btn" disabled>
						Wait...
					</button>
				)}
				{error && <p className="error">{error}</p>}
			</form>
		</div>
	);
};
