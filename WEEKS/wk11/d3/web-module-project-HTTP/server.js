const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(CORS());

let movies = [
  {
    id: 0,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    metascore: 100,
    genre: "Drama",
    description:
      "War hero Michael is the prodigal son of aging but fearsome crime patriarch Don Vito Corleone. When Michael returns home only to be thrust into an all-too-familiar world of hitmen, corrupt cops, and simmering mafia rivalries, he is forced to choose between his own path and the Corleone family legacy.",
  },
  {
    id: 1,
    title: "Star Wars",
    director: "George Lucas",
    metascore: 92,
    genre: "Scifi",
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
  },
  {
    id: 2,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    metascore: 92,
    genre: "Fantasy",
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
  },
  {
    id: 3,
    title: "Terminator 2: Judgement Day",
    director: "James Cameron",
    metascore: 94,
    genre: "Action",
    description:
      "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son, John Connor, from a more advanced and powerful cyborg.",
  },
  {
    id: 4,
    title: "Dumb and Dumber",
    director: "The Farely Brothers",
    metascore: 76,
    genre: "Comedy",
    description:
      "After a woman leaves a briefcase at the airport terminal, a dumb limo driver and his dumber friend set out on a hilarious cross-country road trip to Aspen to return it.",
  },
  {
    id: 5,
    title: "Tombstone",
    director: "George P. Cosmatos",
    metascore: 89,
    genre: "Drama",
    description:
      "A successful lawman's plans to retire anonymously in Tombstone, Arizona are disrupted by the kind of outlaws he was famous for eliminating.",
  },
];

let movieId = movies.length;

app.get("/api/movies", (req, res) => {
  res.send(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const movie = movies.filter((movie) => `${movie.id}` === req.params.id)[0];
  res.status(200).json(movie);
});

app.post("/api/movies", (req, res) => {
  if (req.body.title !== undefined) {
    const newMovie = req.body;
    newMovie["id"] = movieId;
    movies.push(newMovie);
  }
  ++movieId;
  res.status(201).json(movies);
});

app.put("/api/movies/:id", (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the movie id");
  if (
    req.body.id === undefined ||
    !req.body.title ||
    !req.body.director ||
    !req.body.metascore
  ) {
    res
      .status(422)
      .send("Make sure your request body has all the fields it needs");
  }
  movies = movies.map((movie) => {
    if (`${movie.id}` === req.params.id) {
      return req.body;
    }
    return movie;
  });
  res.status(200).send(movies);
});

app.delete("/api/movies/:id", (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the movie id");
  movies = movies.filter((movie) => `${movie.id}` !== req.params.id);
  res.status(202).send(movies);
});

app.get("/", function (req, res) {
  res.send("Server is working 👍");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
