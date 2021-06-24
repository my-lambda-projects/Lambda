export const DELETE_MOVIE = "DELETE_MOVIE";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};
