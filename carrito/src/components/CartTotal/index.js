import React from "react";
import { useCheckout } from "../../hooks/useCheckout";

function CartTotal(props) {
  const { products } = props;
  const checkout = useCheckout(products);
  return (
    <div>
      <h3>Total</h3>
      <p>{`Cantidad de productos ${checkout.quantity}`}</p>
      <p>{`Total $${checkout.total}`}</p>
    </div>
  );
}

export default CartTotal;
