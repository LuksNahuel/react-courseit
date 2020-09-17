import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { siteId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const getProducts = await fetch(
        `https://api.mercadolibre.com/sites/${siteId}/search?q=auriculares`
      );
      const productsJson = await getProducts.json();
      setProducts(productsJson.results);
    }
    fetchData();
  }, [siteId]);

  return products.map((item, key) => {
    return (
      <Product
        img={item.thumbnail}
        title={item.title}
        key={item.id ? item.id : key}
      />
    );
  });
}

export default ProductList;
