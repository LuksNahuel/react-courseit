import React, { useContext } from "react";
import GitHubUserContext from "../../contexts/GitHubUserContext";

function Bio() {
  const { userData } = useContext(GitHubUserContext);
  return (
    <div>
      <p>{userData.bio}</p>
    </div>
  );
}

export default Bio;
