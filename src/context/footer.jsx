import "../styles/Footer.css"

const Footer = () =>{
    return(
        <div className="contentFooter">
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2><span>Compu-Magic-Store</span></h2>
                        <p>Todo lo que necesita para su ordenador <br />
                        lo encuentra con nosotros, manejamos los<br />
                         mejores presios del mercado.  </p>
                    </div>

                    <div className="footer-links">
                        <h3>Enlaces</h3>
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/productos">Productos</a></li>
                            <li><a href="/About">Contacto</a></li>
                            <li><a href="/soporte">Soporte</a></li>
                        </ul>
                    </div>

                    <div className="footer-contacto">
                        <h3>Contacto</h3>
                        <a className="link-item" href="https://www.facebook.com/profile.php?id=61576451712153">Facebook</a>
                        <p> 📧 Email: Compu_Magic_Store@gmail.com</p>
                        <p> 📞 Tel: +51 917 361 031</p>
                    </div>
                    <div>                        
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