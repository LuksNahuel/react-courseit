import React, { useContext } from "react";
import Project from "../Project";
import GitHubUserContext from "../../contexts/GitHubUserContext";

function Projects() {
  const { repos } = useContext(GitHubUserContext);
  return (
    <div>
      {repos.map((repo, key) => {
        return <Project repo={repo} key={key} />;
      })}
    </div>
  );
}

export default Projects;
