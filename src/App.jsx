import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Productos from './pages/productos';
import Navbar from './components/Navbar';
import Footer from './context/footer';
import './styles/Global.css'
import CarritoFlotante from './context/Carritoflotante';

const App = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
        <CarritoFlotante/>
      </main>
      <Footer />
    </div>
  );
};

export default App;
