import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import ProductsPage from './components/ProductsPage.jsx';
import ProductDetailsPage from './components/ProductDetailsPage.jsx';
import NavigationBar from './components/NavBar.jsx';
import UserForm from './components/UserForm.jsx';
import './App.css';


function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/products' element={<ProductsPage />} />

        <Route path='/products/:productId' element={<ProductDetailsPage />} />

        <Route path='/user-form' element={<UserForm />} />
        
      </Routes>
    </>
  );
}

export default App;