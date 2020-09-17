import React from "react";
import { Link } from "react-router-dom";
import sites from "../../sites.json";

function Home() {
  return (
    <>
      <ul>
        {sites.map((site, key) => {
          return (
            <li key={key}>
              <Link to={`sites/${site.id}`}>{site.country}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
