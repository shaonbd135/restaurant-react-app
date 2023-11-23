import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import NavHero from './Components/Header/NavHero';
import NotFound from './Components/NotFound/NotFound';
import Cart from './Components/Cart/Cart';



function App() {
  const Router = BrowserRouter;
  return (
    <div >
       <Router>
        <NavHero></NavHero>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about-us' element={<AboutUs/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
