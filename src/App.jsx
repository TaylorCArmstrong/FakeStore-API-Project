import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import ProductsPage from './components/ProductsPage.jsx';
import ProductDetailsPage from './components/ProductDetailsPage.jsx';
import NavigationBar from './components/NavBar.jsx';
import UserForm from './components/UserForm.jsx';
import CartPage from './components/CartPage.jsx';
import { CartProvider } from './context/CartContext.jsx';
import './App.css';


function App() {
  return (
    <CartProvider>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/products' element={<ProductsPage />} />

        <Route path='/products/:productId' element={<ProductDetailsPage />} />

        <Route path='/cart' element={<CartPage />} />

        <Route path='/user-form' element={<UserForm />} />
        
      </Routes>
    </CartProvider>
  );
}

export default App;