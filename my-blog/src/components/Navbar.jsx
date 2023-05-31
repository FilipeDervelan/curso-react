import styles from './Navbar.module.css';

import { NavLink } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import { useAuthValue } from '../context/AuthContext';

export const Navbar = () => {
	const { user } = useAuthValue();
	const { logout } = useAuth();

	return (
		<nav className={styles.navbar}>
			<NavLink to="/" className={styles.brand}>
				My <span>Blog</span>
			</NavLink>

			<ul className={styles.links_list}>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? styles.active : '')}
					>
						Home
					</NavLink>
				</li>

				{!user && (
					<>
						<li>
							<NavLink
								to="/login"
								className={({ isActive }) => (isActive ? styles.active : '')}
							>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/register"
								className={({ isActive }) => (isActive ? styles.active : '')}
							>
								Register
							</NavLink>
						</li>
					</>
				)}
				{user && (
					<>
						<li>
							<NavLink
								to="/posts/create"
								className={({ isActive }) => (isActive ? styles.active : '')}
							>
								New
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard"
								className={({ isActive }) => (isActive ? styles.active : '')}
							>
								Dashboard
							</NavLink>
						</li>
					</>
				)}
				<li>
					<NavLink
						to="/about"
						className={({ isActive }) => (isActive ? styles.active : '')}
					>
						About
					</NavLink>
				</li>
				{user && (
					<li>
						<button onClick={logout}>Log Out</button>
					</li>
				)}
			</ul>
		</nav>
	);
};
