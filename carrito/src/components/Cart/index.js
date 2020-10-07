import React from "react";

function Cart(props) {
  const { products } = props;
  console.log(products);
  return (
    <div>
      <h3>Carrito</h3>
      <ul>
        {products.map((product, key) => {
          return (
            <li key={key}>
              {product.title}
              {`$${product.price}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
