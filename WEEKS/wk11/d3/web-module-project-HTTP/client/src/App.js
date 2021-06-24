// import React, { useEffect, useState } from "react";
//
// import { Route, Switch, Redirect } from "react-router-dom";
// import MovieList from './components/MovieList';
// import Movie from './components/Movie';
//
// import MovieHeader from './components/MovieHeader';
//
// import EditMovieForm from './components/EditMovieForm';
// import FavoriteMovieList from './components/FavoriteMovieList';
//
// import axios from 'axios';
//
// const App = (props) => {
//   const [movies, setMovies] = useState([]);
//   const [favoriteMovies, setFavoriteMovies] = useState([]);
//
//   useEffect(()=>{
//     axios.get('http://localhost:5000/api/movies')
//       .then(res => {
//         setMovies(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);
//
//   const deleteMovie = (id)=> {
//   }
//
//   const addToFavorites = (movie) => {
//
//   }
//
//   return (
//     <div>
//       <nav className="navbar navbar-dark bg-dark">
//         <span className="navbar-brand" ><img width="40px" alt="" src="./Lambda-Logo-Red.png"/> HTTP / CRUD Module Project</span>
//       </nav>
//
//       <div className="container">
//         <MovieHeader/>
//         <div className="row ">
//           <FavoriteMovieList favoriteMovies={favoriteMovies}/>
//
//           <Switch>
//             <Route path="/movies/edit/:id">
//             </Route>
//
//             <Route path="/movies/:id">
//               <Movie/>
//             </Route>
//
//             <Route path="/movies">
//               <MovieList movies={movies}/>
//             </Route>
//
//             <Route path="/">
//               <Redirect to="/movies"/>
//             </Route>
//           </Switch>
//         </div>
//       </div>
//     </div>
//   );
// };
//
//
// export default App;
//
//dependencies
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
//components
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import MovieHeader from "./components/MovieHeader";
import EditMovieForm from "./components/EditMovieForm";
import FavoriteMovieList from "./components/FavoriteMovieList";
import AddMovieForm from "./components/AddMovieForm";

const App = (props) => {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToFavorites = (movie) => {};

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">
          <img width="40px" alt="" src="./Lambda-Logo-Red.png" /> HTTP / CRUD
          Module Project
        </span>
      </nav>

      <div className="container">
        <MovieHeader />
        <div className="row ">
          <FavoriteMovieList favoriteMovies={favoriteMovies} />

          <Switch>
            <Route path="/add-movie">
              <AddMovieForm setMovies={setMovies} />
            </Route>

            <Route path="/movies/edit/:id">
              <EditMovieForm setMovies={setMovies} />
            </Route>

            <Route path="/movies/:id">
              <Movie
                setMovies={setMovies}
                setFavoriteMovies={setFavoriteMovies}
                movies={movies}
                favoriteMovies={favoriteMovies}
              />
            </Route>

            <Route path="/movies">
              <MovieList movies={movies} />
            </Route>

            <Route path="/">
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
