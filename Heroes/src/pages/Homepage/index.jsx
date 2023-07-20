import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <h1>Super Heroes</h1>
      <em>Who's your favorite ?</em>
      <ul>
        <li>
          <Link to="/heroes" >
            Explore all Heroes
          </Link>
        </li>
        <li>
          <Link to="/search" >
            Search your favorite Hero
          </Link>
        </li>
      </ul>
    </>
  );
}
