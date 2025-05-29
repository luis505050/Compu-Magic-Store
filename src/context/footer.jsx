import "../styles/Footer.css"

const Footer = () =>{
    return(
        <div className="contentFooter">
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>MiTienda</h2>
                        <p>Soluciones en tecnología y soporte.</p>
                    </div>

                    <div className="footer-links">
                        <h3>Enlaces</h3>
                        <ul>
                            <li><a href="/inicio">Inicio</a></li>
                            <li><a href="/productos">Productos</a></li>
                            <li><a href="/contacto">Contacto</a></li>
                            <li><a href="/soporte">Soporte</a></li>
                        </ul>
                    </div>

                    <div className="footer-contacto">
                        <h3>Contacto</h3>
                        <p>Email: contacto@mitienda.com</p>
                        <p>Tel: +51 987 654 321</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Compu-Magic-Store. Todos los derechos reservados.</p>
                </div>
            </footer>

        </div>
    );
}
export default Footer;