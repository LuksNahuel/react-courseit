import React from "react";
import ProductList from "../../components/ProductList";

function Carrousel(props) {
  const { siteId } = props.match.params;

  return <ProductList siteId={siteId} />;
}

export default Carrousel;
