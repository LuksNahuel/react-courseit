import React from "react";
import "./App.css";
import Title from "./components/Title";
import InputMirror from "./components/InputMirror";
import Sum from "./components/Sum";
import SumFunctional from "./components/SumFunctional";

function App() {
  const products = [
    {
      name: "Producto 1",
    },
    {
      name: "Producto 2",
    },
    {
      name: "Producto 3",
    },
  ];

  return (
    <>
      <SumFunctional />
      {/*
      <Sum />
      <InputMirror />
      <Title />
      <HeaderOne title="Hola CourseIt" />
      <HeaderOne title="Hola CourseIt" />
      <HeaderTwo title="Curso Fronted Avanzado" />
      <HeaderOne title="Hola CourseIt" />
      <HeaderOne title="Hola CourseIt" />
      <Carrousel nameClass="carousel" products={products} />*/}
    </>
  );
}

const HeaderOne = (props) => {
  return <h1>{props.title}</h1>;
};

const HeaderTwo = (props) => {
  return <h2>{props.title}</h2>;
};

const Carrousel = ({ className, products }) => {
  return (
    <div className={className}>
      {products.map((product) => {
        return <Product name={product.name} />;
      })}
    </div>
  );
};

const Product = (props) => {
  return <div>{props.name}</div>;
};

export default App;
