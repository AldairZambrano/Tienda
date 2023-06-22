import '../style/Menu.css'
import Imagen from './Imagen';

const Menu = ({ addToCart, Cantida }) => {
  const menuItems = [
    // comidas rapidas
    { id: 1, name: "Hamburguesa", price: 20000, imagen: Imagen.hamburgesa},
    { id: 2, name: "Pizza", price: 12500, imagen: Imagen.pizza },
    { id: 3, name: "Ensalada", price: 6999, imagen: Imagen.ensalada},
    { id: 4, name: "Salchipapa", price: 30000, imagen: Imagen.salchipapa},
    { id: 5, name: "chuzo", price: 15000, imagen: Imagen.chuzo},
    { id: 6, name: "Perro Caliente", price: 18000, imagen: Imagen.perrocaliente},
  ];

  const Jugositems = [
    // jugos naturales y gaseosas
    { id: 7, jugos: "Coca cola", price: 8999, imagen: Imagen.cocacola},
    { id: 8, jugos: "Postobon", price: 6000, imagen: Imagen.postobon},
    { id: 9, jugos: "jugo de mora", price: 10000, imagen: Imagen.jugodemora},
    { id: 10, jugos: "Jugo de lulo", price: 12000, imagen: Imagen.jugodelulo},
    { id: 11, jugos: "Agua", price: 3000, imagen: Imagen.agua},
    { id: 12, jugos: "Agua con gas", price: 4000, imagen: Imagen.aguacongas},
  ];

  const Postresitems = [
    // postres 
    { id: 13, postres: "Delicia de chocolate", price: 20000, imagen: Imagen.deliciadechocolate},
    { id: 14, postres: "Maravilla de limón", price: 12500, imagen: Imagen.maravilladelimon},
    { id: 15, postres: "Encanto de vainilla", price: 6999, imagen: Imagen.encantodevainilla},
    { id: 16, postres: "Suspiro de fresa", price: 6999, imagen: Imagen.suspirodefresa},
    { id: 17, postres: "Éxtasis de caramelo", price: 6999, imagen: Imagen.extasisdecaramelo},
    { id: 18, postres: "Tentacion de fresa", price: 6999, imagen: Imagen.tentaciondefresa},
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
  };


  return (
    <section className="catalogo">
    <h2 id='ComidasRapidas'>Comidas rapidas</h2>
      <ul className='catalogo-items'>
        {menuItems.map((item) => (
          <li className='catalogo-item' key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.imagen}></img>
            <p> ${item.price}</p>
            <button className='button' onClick={() => handleAddToCart(item)}>Agregar <i className="bi bi-cart-plus"></i></button>
            <span>{Cantida}</span>
          </li>
          ))}
        </ul>   

        {/* jugos  */}
        <h2 id="jugos">Jugos y Gaseosas</h2>
        <ul className='catalogo-items'>
        {Jugositems.map((item) => (
          <li className='catalogo-item' key={item.id}>
            <h3>{item.jugos}</h3>
            <img src={item.imagen}></img>
            <p> ${item.price}</p>
            <button className='button' onClick={() => handleAddToCart(item)}>Agregar <i className="bi bi-cart-plus"></i></button>
            <span>{Cantida}</span>
          </li>
          ))}
        </ul>  

          {/* Postres */}
          <h2 id="postres">Postres</h2>
        <ul className='catalogo-items'>
        {Postresitems.map((item) => (
          <li className='catalogo-item' key={item.id}>
            <h3>{item.postres}</h3>
            <img src={item.imagen}></img>
            <p> ${item.price}</p>
            <button className='button' onClick={() => handleAddToCart(item)}>Agregar <i className="bi bi-cart-plus"></i></button>
            <span>{Cantida}</span>
          </li>
          ))}
        </ul>  
  </section>
  );
};

export default Menu;
