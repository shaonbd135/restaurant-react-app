import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import NavHero from './Components/Header/NavHero';
import NotFound from './Components/NotFound/NotFound';
import Cart from './Components/Cart/Cart';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { createContext,  useState } from 'react';
import Login from './Components/Login/Login';
import CheckoutPage from './Components/CheckoutPage/CheckoutPage';
import ContactUs from './Components/ContactUs/ContactUs';
export const Context = createContext();

function App() {
  const Router = BrowserRouter;

  const [cart, setCart] = useState([]);

  return (
    <Context.Provider value={[cart, setCart]}>
      <div  >
        <Router>
          <NavHero></NavHero>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
