import React from "react";

const MovieFooter = (props) => {
  const { totalMovies } = props;

  return (
    <div className="clearfix footer">
      <div className="hint-text">
        Showing <b>{totalMovies}</b> entries
      </div>
    </div>
  );
};

export default MovieFooter;
