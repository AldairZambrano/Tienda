import '../style/footer.css'
import imagenes from '../components/Imagen'

import React from 'react';

const Header = () => {
  return (

        <section className="hero align-items-stretch">
          <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
            <img className="hero-imagen-desarrollador rounded-circle" src={imagenes.cocinera} alt="Foto de Jane Doe" />
            <h1>Bienvenidos a Delicious Fast Food</h1>
            <h2>¡El mejor lugar para disfrutar de comida deliciosa y rápida!</h2>
          </div>
        </section>
  );
};

export default Header;
