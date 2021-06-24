import React from "react";
import { Link } from "react-router-dom";

const MovieListItem = (props) => {
  const { id, title, director, genre, metascore } = props.movie;

  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{director}</td>
      <td>{genre}</td>
      <td>{metascore}</td>
      <td>
        <Link to={`/movies/${id}`} className="view">
          <input type="button" className="btn btn-secondary" value="View" />
        </Link>
      </td>
    </tr>
  );
};

export default MovieListItem;
