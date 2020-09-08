import React from "react";

function Item(props) {
  const { title, img } = props;
  return (
    <div>
      <p>{title}</p>
      <img src={img} alt={title} />
    </div>
  );
}

export default Item;
