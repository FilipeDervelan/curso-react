import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { SearchForm } from './components/SearchForm';

import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Product } from './Pages/Product';
import { Info } from './Pages/Info';
import { NotFound } from './Pages/NotFound';
import { Search } from './Pages/Search';

function App() {
	return (
		<div className="App">
			<h1>React Router</h1>
			<BrowserRouter>
				<Navbar />
				<SearchForm />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/products/:id" element={<Product />} />
					<Route path="/products/:id/info" element={<Info />} />
					<Route path="/search" element={<Search />} />
					<Route path="/company" element={<Navigate to="/about" />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
