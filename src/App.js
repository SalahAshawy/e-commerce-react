
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import {Router} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
<>
<Navbar/> 
    <Routes>
     
     
       
       <Route exact path ="/" element={<Home/>}  /> 
       <Route exact path ="/products" element={<Products/>}  /> 
       <Route exact path ="/products/:id" element={<Product/>} /> 
       <Route exact path ="/cart" element={<Cart/>}  /> 
       <Route exact path ="/login" element={<Login/>}  /> 
       <Route exact path ="/register" element={<Register/>}  /> 
    
      </Routes>

</>
  );
}

export default App;
