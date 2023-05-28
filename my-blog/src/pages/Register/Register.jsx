import { useEffect, useState } from 'react';
import styles from './Register.module.css';
import { useAuth } from '../../hooks/useAuth';

export const Register = () => {
	const [displayName, setDisplayName] = useState('');
	const [email, setemail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	const { createUser, error: authError, loading } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();

		setError('');

		const user = {
			displayName,
			email,
			password,
		};

		if (password !== confirmPassword) {
			setError('As senhas não estão iguais!');
			return;
		}

		const res = await createUser(user);

		console.log(res);
	};

	useEffect(() => {
		if (authError) {
			setError(authError);
		}
	}, [authError]);

	return (
		<div className={styles.register}>
			<h1>Register to make a post</h1>
			<p>Create your user and share your histories</p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Name:</span>
					<input
						type="text"
						name="displayName"
						required
						placeholder="Username"
						value={displayName}
						onChange={(e) => setDisplayName(e.target.value)}
					/>
				</label>
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
				<label>
					<span>Confirm your Password:</span>
					<input
						type="password"
						name="confirmPassword"
						required
						placeholder="Confirm your password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</label>
				{!loading ? (
					<button className="btn">Register</button>
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
