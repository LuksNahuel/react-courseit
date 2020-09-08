import React, { useState, useEffect } from "react";
import Item from "../Item";

function List(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getProducts = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=auriculares"
    );
    const productsJson = await getProducts.json();
    setProducts(productsJson.results);
  }

  return products
    .filter((item) => {
      return props.filter ? item.title.includes(props.filter) : item;
    })
    .map((item, key) => {
      return (
        <Item
          img={item.thumbnail}
          title={item.title}
          key={item.id ? item.id : key}
        />
      );
    });
}

export default List;
