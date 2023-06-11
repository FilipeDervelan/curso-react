import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { useEffect, useState } from 'react';
import { useAuth } from './hooks/useAuth';

import { AuthProvider } from './context/AuthContext';

import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { CreatePost } from './pages/CreatePost/CreatePost';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Search } from './pages/Search/Search';

function App() {
	const [user, setUser] = useState(undefined);
	const { auth } = useAuth();

	const loadingUser = user === undefined;

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, [auth]);

	if (loadingUser) {
		return <p>Loading...</p>;
	}

	return (
		<div className="App">
			<AuthProvider value={{ user }}>
				<BrowserRouter>
					<Navbar />
					<div className="container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/search" element={<Search />} />
							<Route
								path="/login"
								element={!user ? <Login /> : <Navigate to="/" />}
							/>
							<Route
								path="/register"
								element={!user ? <Register /> : <Navigate to="/" />}
							/>
							<Route
								path="/posts/create"
								element={user ? <CreatePost /> : <Navigate to="/login" />}
							/>
							<Route
								path="/dashboard"
								element={user ? <Dashboard /> : <Navigate to="/login" />}
							/>
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
