import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/Navbar';

import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { About } from './pages/About';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Product />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
