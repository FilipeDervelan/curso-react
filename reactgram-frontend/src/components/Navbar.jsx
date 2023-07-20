import './Navbar.css';

// Components
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
	BsSearch,
	BsHouseDoorFill,
	BsFillPersonFill,
	BsFillCameraFill,
} from 'react-icons/bs';

// Hooks
import { useAuth } from '../Hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { logout, reset } from '../slices/authSlice';

export const Navbar = () => {
	const { auth } = useAuth;
	const { user } = useSelector((state) => state.auth);

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		dispatch(reset());

		navigate('/login');
	};

	return (
		<nav id="nav">
			<Link to="/">ReactGram</Link>
			<form id="search-form">
				<BsSearch />
				<input type="text" placeholder="Pesquisar" />
			</form>
			<ul id="nav-links">
				{auth ? (
					<>
						<li>
							<NavLink to="/">
								<BsHouseDoorFill />
							</NavLink>
						</li>
						{user && (
							<li>
								<NavLink to={`/users/${user._id}`}>
									<BsFillCameraFill />
								</NavLink>
							</li>
						)}
						<li>
							<NavLink tp="/profile">
								<BsFillPersonFill />
							</NavLink>
						</li>
						<li>
							<span onClick={handleLogout}>Sair</span>
						</li>
					</>
				) : (
					<>
						<li>
							<NavLink to="/login">Entrar</NavLink>
						</li>
						<li>
							<NavLink to="/register">Registrar</NavLink>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};
