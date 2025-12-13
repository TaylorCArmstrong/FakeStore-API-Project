import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import ProductsPage from './components/ProductsPage.jsx';
import ProductDetailsPage from './components/ProductDetailsPage.jsx';
import NavigationBar from './components/NavBar.jsx';


function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/products' element={<ProductsPage />} />

        <Route path='/products/:productId' element={<ProductDetailsPage />} />
        
      </Routes>
    </>
  );
}

export default App;