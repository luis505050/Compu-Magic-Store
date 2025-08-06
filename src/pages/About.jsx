import "../styles/about.css";

const About = () => {
  return (
    <>
      <h1>Contactenos</h1>
      <div className="formulario">
        <form action="https://submit-form.com/pNn6vRmwJ" className="form-contac">

          <div className="input-group">
            <input type="text" id="name" name="name" placeholder=" " required />
            <label htmlFor="name">Nombre</label>
          </div>

          <div className="input-group">
            <input type="email" id="email" name="email" placeholder=" " required />
            <label htmlFor="email">Correo</label>
          </div>

          <div className="input-group">
            <textarea id="message" name="message" placeholder=" " required></textarea>
            <label htmlFor="message">Mensaje</label>
          </div>

          <button className="Enviar" type="submit">Enviar</button>
          <input 
            type="hidden"
            name="_redirect"
            value="https://compu-magic-store.netlify.app/about" />

        </form>
      </div>
    </>
  );
};

export default About;
