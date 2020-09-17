import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import User from "./components/User";
import { GitHubUserProvider } from "./contexts/GitHubUserContext";

function App() {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchData("https://api.github.com/users/luksnahuel", setUser);
    fetchData("https://api.github.com/users/luksnahuel/repos", setRepos);
  }, []);

  async function fetchData(url, setter) {
    const getData = await fetch(url);
    const json = await getData.json();
    setter(json);
  }

  return (
    <>
      <GitHubUserProvider value={{ userData: user, repos: repos }}>
        <Navbar />
        <User />
        <Projects />
      </GitHubUserProvider>
    </>
  );
}

export default App;
