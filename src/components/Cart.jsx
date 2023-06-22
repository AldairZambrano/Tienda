import '../style/Cart.css'
import { useState } from 'react';

const Boton = ({cartItem}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return(
    <div>
    <button className="boton btn btn-primary"  onClick={toggleMenu}><i className="bi bi-grid"></i></button>
      {menuVisible && (
        <ul className="menu-options">
          <li  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Carrito <i className="bi bi-cart"><span className='contCar'>{cartItem}</span></i></li>
          <li><a href='#nav'>Inicio</a></li>
          <li><a href='#contacto'>Contacto</a></li>
        </ul>
      )}
  </div>
  )
}

const Cart = ({ cartItems,removeFromCart,total,cartItemCount }) => {
  return (
    <>
    <Boton cartItem={cartItemCount}></Boton>

    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <h2 className="offcanvas-title" id="offcanvasRightLabel">Carrito de compra</h2>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
      <div className="cart">
      <ul className='ul'>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.imagen}></img>
            {item.name}{item.jugos}{item.postres} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div className="total">Total: ${total}</div>
      <button className='pagar'>Pagar</button>
    </div>
    </div>
    </div>
    </>
  );
};

export default Cart;
