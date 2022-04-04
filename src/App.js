import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from './components/CartPage';
import Header from './components/Header';
import ProductsPage from './components/ProductsPage';
import './main.scss';

function App() {
  return (
    <Router>
      <main>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </main>
    </Router>
  );
}

export default App;
