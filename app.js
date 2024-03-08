// Import required modules
const express = require("express");
const cors = require("cors");
const tempData = require("./tempData.js");

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;
const url = "https://webpt19b.web.app";

// Middleware setup
app.use(cors());
app.use(express.static("public"));

// Shuffle function using Fisher-Yates algorithm
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Endpoint to retrieve random movies with a specified quantity
app.get("/movies", (req, res) => {
  const requestedQuantity = parseInt(req.query.quantity) || 12; // Default to 16 if quantity is not provided
  const shuffledData = shuffleArray([...tempData]);
  const selectedMovies = shuffledData.slice(0, requestedQuantity);
  console.log(parseInt(req.query.quantity));
  res.json(selectedMovies);
});

// Endpoint to retrieve a specific movie by ID
app.get("/movie/:id", (req, res) => {
  const movieId = parseInt(req.params.id);
  const movie = tempData.find((m) => m.id === movieId);

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  res.json(movie);
});

// Redirect all other routes to the main domain
app.get("*", (req, res) => {
  res.redirect(url);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
