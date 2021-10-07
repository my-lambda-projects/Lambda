import React from "react";
import { Link } from "react-router-dom";
import "./Link.css";

function StyledLink(props) {
  return (
    <div className="Link">
      <Link to={props.path}>{props.label}</Link>
    </div>
  );
}

export default StyledLink;
