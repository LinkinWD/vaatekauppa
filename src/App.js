import './App.css';
import { Route, Routes } from 'react-router-dom';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//pages
import Kauppa from './pages/Kauppa';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';

//context
import { CartProvider } from './context';

function App() {
	return (
		<CartProvider>
			<main>
				<Navbar />
				<Routes>
					<Route path="/" index element={<Welcome />} />
					<Route path="kauppa" element={<Kauppa />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</main>
		</CartProvider>
	);
}

export default App;
