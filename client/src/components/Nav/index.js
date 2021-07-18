import React from "react";
import { Link } from "react-router-dom";

function Nav() {

    return (
    <div>
        <Link to="/">
        <p>App Countries</p>
        </Link>
        <div>
        <Link to="/home"> HOME </Link>
        </div>
        <div>
        <Link to="/activity"> Add Activity </Link>
        </div>
    </div>
  );
}

export default Nav;
