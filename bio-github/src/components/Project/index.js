import React from "react";

function Project(props) {
  const { name, description, stargazers_count } = props.repo;
  return (
    <>
      <h3>{name}</h3>
      <p>{`${
        description ? description : ""
      } Estrellitas: ${stargazers_count}`}</p>
    </>
  );
}

export default Project;
