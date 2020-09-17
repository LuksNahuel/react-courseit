import React, { useContext } from "react";
import GitHubUserContext from "../../contexts/GitHubUserContext";

function Navbar() {
  const { userData } = useContext(GitHubUserContext);
  return (
    <nav>
      <h1>{userData.login}</h1>
    </nav>
  );
}

export default Navbar;
