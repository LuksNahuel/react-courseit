import React from "react";

function Product(props) {
  const { title, img } = props;
  return (
    <div>
      <p>{title}</p>
      <img src={img} alt={title} />
    </div>
  );
}

export default Product;
