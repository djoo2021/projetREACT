
import './App.css';

import Footer from './componnents/Footer';
import Home from './componnents/Home';
import About from './componnents/About';
import Product from './componnents/Product';
import Contact from './componnents/Contact';
import { Routes,Route} from 'react-router-dom';
import Header from './componnents/Header';
import ProductDetail from './componnents/ProductDetail';
import Cart from './componnents/Cart';

function App() {
  return (
    
      <>
      <Header />
      <Routes>
        <Route  exact path="/" element={<Home/>}/>
        <Route  exact path="/products" element={<Product/>}/>
        <Route  exact path="/products/:id" element={<ProductDetail/>}/>
        <Route  exact path="/cart" element={<Cart/>}/>
        <Route  exact path="/about" element={<About/>}/>
        <Route  exact path="/contact" element={<Contact/>}/> 
      </Routes>
     <Footer />
      </>
   
  );
}

export default App;
