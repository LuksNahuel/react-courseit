import React from "react";

function LargeCard({ data: { title, price, img }, handleCallback }) {
  function handleClick() {
    handleCallback({ title, price, img });
  }

  return (
    <div onClick={handleClick}>
      <h3>{title}</h3>
      <p>{price}</p>
      <img src={img} alt={title} />
    </div>
  );
}

export default LargeCard;
