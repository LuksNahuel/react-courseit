import React, { useContext } from "react";
import GitHubUserContext from "../../contexts/GitHubUserContext";

function Avatar() {
  const { userData } = useContext(GitHubUserContext);
  return <img src={userData.avatar_url} alt={userData.name} />;
}

export default Avatar;
