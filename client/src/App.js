import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pagenotfound from './pages/Pagenotfound';
import Policy from './pages/Policy';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/policy' element={<Policy/>}></Route>
      <Route path='/*' element={<Pagenotfound/>}></Route>
    </Routes>
    </>
  );
}

export default App;
