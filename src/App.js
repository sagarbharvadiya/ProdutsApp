import React from 'react';
import '../src/css/style.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavbarMain from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
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
        <Route exact path='/shop/product' element={<Shop />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
