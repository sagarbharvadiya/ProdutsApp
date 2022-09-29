import React from 'react';
import '../src/css/style.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavbarMain from './components/Header/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';
import Footernew from './components/Footer/Footernew';
import ProductDetails from './components/Products/Product-Details';
import ProductFull from './components/Products/ProductFull';
import CollectionFull from './components/Collections/Collectionfull';
// import Loader from './components/Loader';
function App() {
 
  return (
    <>
      {/* <Loader /> */}
      <NavbarMain />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/collection' element={<Collection />} />
        <Route exact path='/product/' element={<ProductDetails />} />
        <Route exact path='/product/:productId' element={<ProductFull />} />
        <Route exact path='/collection/:productId' element={<CollectionFull />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footernew />

    </>
  );
}

export default App;
