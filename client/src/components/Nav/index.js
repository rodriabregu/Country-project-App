import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function Nav() {

  const [activity, setActivity] = useState("");
  const dispatch = useDispatch();

    return (
    <div>
        <Link to="/">
        <p>App Countries</p>
        </Link>
        <div>
        <Link to="/activity"> Add Activity </Link>
        </div>
    </div>
  );
}

export default Nav;
