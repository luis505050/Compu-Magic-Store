import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='navbar'>
      <div className="navbar-logo-container">
        <span className="navbar-logo"><Link to="/">Compu</Link></span>
        <span className="navbar-logo"><Link to="/">Magic</Link></span>
      </div>

      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
        <Link to="/productos" onClick={() => setMenuOpen(false)}>Productos</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>Acerca de</Link>
      </div>
    </nav>
  );
};

export default Navbar;
