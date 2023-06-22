import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import "./App.css";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="app">
      <Navbar/>
      <Header></Header>
      <div className="content">
        <Menu addToCart={addToCart} />
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          total={calculateTotal()}
          cartItemCount={cartItems.length}
        />
      </div>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
};

export default App;
