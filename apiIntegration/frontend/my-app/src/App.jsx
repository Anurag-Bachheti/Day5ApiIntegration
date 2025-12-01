import { Routes, Route, NavLink } from 'react-router-dom';

//pages
import SendUser1 from './components/SendUser1';
import AddUser1 from './components/AddUser1'

//Navigation
import Home from './navigation/Home';
// import NotFound from './navigation/NotFound';

import './App.css'

const navLinkStyle = ({ isActive }) => {
  return {
    padding: "10px",
    color: isActive ? "red" : "black",
  };
};

function App() {
  return (
    <>
      <nav style={{padding: 12}}> 
        <NavLink to="/" end style={navLinkStyle}>Home</NavLink>
        <NavLink to="/AddUser1" end style={navLinkStyle}>AddUser</NavLink>
        <NavLink to="/SendUser1" end style={navLinkStyle}>SendUser</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/AddUser1" element={<AddUser1/>}></Route>
        <Route path="/SendUser1" element={<SendUser1/>}></Route>
      </Routes>
    </>
  )
}

export default App;