import React, { useContext } from "react";
import ContentContext from "../../contexts/ContentContext";

function Content() {
  const { content } = useContext(ContentContext);
  return <p>{content}</p>;
}

export default Content;
