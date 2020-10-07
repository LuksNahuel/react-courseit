import React from "react";
import products from "../../data/products.json";
import LargeCard from "../LargeCard";
import SmallCard from "../SmallCard";

function ProductList({ handleCallback }) {
  const [first, second, third] = products;

  function handleProduct(product) {
    handleCallback(product);
  }

  return (
    <>
      <LargeCard data={first} handleCallback={handleProduct} />
      <SmallCard data={second} handleCallback={handleProduct} />
      <SmallCard data={third} handleCallback={handleProduct} />
    </>
  );
}

export default ProductList;
