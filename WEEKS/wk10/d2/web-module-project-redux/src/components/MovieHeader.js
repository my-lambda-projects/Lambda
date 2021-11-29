import React from "react";
import { Link } from "react-router-dom";

const MovieHeader = (props) => {
  const appTitle = "";
  const displayFavorites = true;

  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
          <div className="btn btn-sm btn-primary">
            <span>{displayFavorites ? "Hide" : "Show"} Favorites</span>
          </div>
          <Link to="/movies" className="btn btn-sm btn-primary">
            View All Movies
          </Link>
          <Link to="/movies/add" className="btn btn-sm btn-success">
            <i className="material-icons">&#xE147;</i>{" "}
            <span>Add New Movie</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieHeader;
