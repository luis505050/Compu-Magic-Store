import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#1561F0', padding: '1rem', color: 'white' }}>
      <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Inicio</Link>
      <Link to="/about" style={{ color: 'white' }}>Acerca de</Link>
    </nav>
  );
};

export default Navbar;
