import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => {
        const { title, director, metascore, id } = movie;
        return (
          <MovieCard
            id={id}
            title={title}
            director={director}
            metascore={metascore}
          ></MovieCard>
        );
      })}
    </div>
  );
}
