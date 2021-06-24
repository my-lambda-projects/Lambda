import React from "react";
import { useHistory } from "react-router-dom";

export default function MovieCard(props) {
  const history = useHistory();
  const { title, director, metascore, id } = props;
  return (
    <div
      className="movie-card"
      onClick={() => {
        history.push(`/movie/${id}`);
      }}
    >
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
