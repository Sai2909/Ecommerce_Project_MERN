import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminRoute from './components/Routes/AdminRoute';
import PrivateRoute from './components/Routes/Private';
import About from './pages/About';
import AdiminDashboard from './pages/admin/AdiminDashboard';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pagenotfound from './pages/Pagenotfound';
import Policy from './pages/Policy';
import Dashboard from './pages/user/Dashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/dashboard' element={<PrivateRoute/>}>
      <Route path='user' element={<Dashboard/>}></Route>
      </Route>
      <Route path='/dashboard' element={<AdminRoute/>}>
      <Route path='admin' element={<AdiminDashboard  />}></Route>
      </Route>
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
