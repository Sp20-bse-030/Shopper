import './App.css';
import Navbar from './components/NavBar/Navbar';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/footer';
import Shopcategory from './pages/Shopcategory';
import p1 from './components/Assets/Womenbanner.jpg'
import p2 from './components/Assets/Menbanner.jpg'
import p3 from './components/Assets/Kidbanner.jpg'
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Signup from './pages/SignUp';
import LogIn from './pages/LogIn';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Shop/>} />
        <Route path='/men' element= {<Shopcategory banner = {p2} category="men"/>}/>
        <Route path='/women' element= {<Shopcategory banner = {p1}  category = "women"/> }/>
        <Route path='/kid' element= {<Shopcategory banner = {p3} category = "kid"/>}/> 
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/product' element = {<Product/>}>
          <Route path=':productId' element = {<Product/>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<LogIn/>}/>

        <Route path="/signup/login" element={<LogIn />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;