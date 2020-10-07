import React from "react";
import Cart from "../Cart";
import CartTotal from "../CartTotal";

function Checkout(props) {
  const { products } = props;
  return (
    <div>
      <Cart products={products} />
      <CartTotal products={products} />
    </div>
  );
}

export default Checkout;
