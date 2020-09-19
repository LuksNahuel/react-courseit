import React, { useContext } from "react";
import ContentContext from "../../contexts/ContentContext";

function InputTest() {
  const { handleContent } = useContext(ContentContext);
  return <input type="text" onChange={(e) => handleContent(e.target.value)} />;
}

export default InputTest;
