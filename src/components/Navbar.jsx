import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-logo"><Link to="/">Compu Magic store</Link></div>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/about">Acerca de</Link>
      </div>
    </nav>
  );
};

export default Navbar;
