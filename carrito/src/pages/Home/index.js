import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Checkout from "../../components/Checkout";
import Button from "../../components/Button";
import ProductList from "../../components/ProductList";

function Home() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  function handleCheckoutToggle() {
    setShowCheckout((prevState) => !prevState);
  }

  function addProduct(product) {
    setSelectedProducts((prevState) => [...prevState, product]);
  }

  return (
    <>
      <Navbar>
        <Button text="Ver carrito" onClick={handleCheckoutToggle} />
      </Navbar>
      <ProductList handleCallback={addProduct} />
      {showCheckout && <Checkout products={selectedProducts} />}
    </>
  );
}

export default Home;
