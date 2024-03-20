// Import required modules
const express = require("express");
const cors = require("cors");
const path = require("path");

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;
const url = "https://webpt19b.web.app";

// Middleware setup
app.use(cors());
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// Shuffle function using Fisher-Yates algorithm
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Initialize object to store visit counts for each endpoint
let visitCounts = {
  "/visit-counts": 0,
  "/": 0,
  "/:id": 0,
};

// Endpoint to increment visit count for specified endpoint
// app.get("/visit", (req, res) => {
//   visitCounts["/visit"]++;
//   res.json({ message: "Visit count incremented", visitCounts: visitCounts["/visit"] });
// });

// Endpoint to retrieve visit count for specified endpoint
app.get("/visit-counts", (req, res) => {
  visitCounts["/visit-counts"]++;
  res.json({ visitCounts });
});

app.get("/reset", (req, res) => {
  visitCounts = Object.fromEntries(Object.keys(visitCounts).map((key) => [key, 0])); // Reset all visit counts to 0
  res.json({ visitCounts });
});

// Endpoint to retrieve random movies with a specified quantity
app.get("/", (req, res) => {
  const database1 = require("./database1.js");
  visitCounts["/"]++;
  const requestedQuantity = parseInt(req.query.quantity) || 12; // Default to 16 if quantity is not provided
  const shuffledData = shuffleArray([...database1]);
  const selectedMovies = shuffledData.slice(0, requestedQuantity);
  res.json(selectedMovies);
});

app.get("/databaseCSS", (req, res) => {
  const databaseCSS = require("./databaseCSS.js");
  visitCounts["/"]++;
  const requestedQuantity = parseInt(req.query.quantity) || 12; // Default to 16 if quantity is not provided
  const shuffledData = shuffleArray([...databaseCSS]);
  const selectedMovies = shuffledData.slice(0, requestedQuantity);
  res.json(selectedMovies);
});

app.get("/databaseJS", (req, res) => {
  const databaseJS = require("./databaseJS.js");
  visitCounts["/"]++;
  const requestedQuantity = parseInt(req.query.quantity) || 12; // Default to 16 if quantity is not provided
  const shuffledData = shuffleArray([...databaseJS]);
  const selectedMovies = shuffledData.slice(0, requestedQuantity);
  res.json(selectedMovies);
});

app.get("/databaseBootstrap", (req, res) => {
  const databaseBootstrap = require("./databaseBootstrap.js");
  visitCounts["/"]++;
  const requestedQuantity = parseInt(req.query.quantity) || 12; // Default to 16 if quantity is not provided
  const shuffledData = shuffleArray([...databaseBootstrap]);
  const selectedMovies = shuffledData.slice(0, requestedQuantity);
  res.json(selectedMovies);
});

app.get("/databaseNodeJS", (req, res) => {
  const databaseNodeJS = require("./databaseNodeJS.js");
  visitCounts["/"]++;
  const requestedQuantity = parseInt(req.query.quantity) || 12; // Default to 16 if quantity is not provided
  const shuffledData = shuffleArray([...databaseNodeJS]);
  const selectedMovies = shuffledData.slice(0, requestedQuantity);
  res.json(selectedMovies);
});

// Endpoint to retrieve a specific movie by ID
app.get("/:id", (req, res) => {
  visitCounts["/:id"]++;
  const movieId = parseInt(req.params.id);
  const movie = database1.find((m) => m.id === movieId);

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  res.json(movie);
});

// Redirect all other routes to the main domain
app.get("*", (req, res) => {
  res.redirect(url);
});

module.exports = app;
