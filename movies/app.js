// Import required modules
const express = require("express");
const cors = require("cors");
const database1 = require("./database1.js");
const path = require("path");

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;
const url = "https://webpt19b.web.app";

let database2 = [database1[0]];

// Middleware setup
app.use(cors());
app.use(express.json());
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

app.get("/temp", (req, res) => {
  res.json(database2);
});

app.post("/temp", (req, res) => {
  database2.push(req.body);
  res.json({ message: "successful", data: database2 });
});

app.get("/temp/reset", (req, res) => {
  database2 = [database1[0]];
  res.json({ message: "successful", data: database2 });
});

app.get("/temp/empty", (req, res) => {
  database2 = [];
  res.json({ message: "successful", data: database2 });
});

// Endpoint to delete data by ID
app.delete("/temp/:id", (req, res) => {
  const id = req.params.id;
  // console.log(typeof +id)
  const index = database2.findIndex((item) => item._id == +id);
  console.log(index)
  if (index !== -1) {
    database2.splice(index, 1);
    res.json({ message: "Item deleted successfully", data: database2 });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.put("/temp/:id", (req, res) => {
  const id = req.params.id;
  const index = database2.findIndex((item) => item._id === +id);
  if (index !== -1) {
    database2[index] = req.body; // Replace the item with the updated data
    res.json({ message: "Item updated successfully", data: database2[index] });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

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
  visitCounts["/"]++;
  const requestedQuantity = parseInt(req.query.quantity) || 6; // Default to 16 if quantity is not provided
  const shuffledData = shuffleArray([...database1]);
  const selectedMovies = shuffledData.slice(0, requestedQuantity);
  res.json(selectedMovies);
});

app.get("/all", (req, res) => {
  res.json(database1);
});

app.get("/quantity/:quantity", (req, res) => {
  const quantityParams = parseInt(req.params.quantity);
  const selectedMovies = database1.slice(0, quantityParams);
  res.json(selectedMovies);
});

// Endpoint to retrieve a specific movie by ID
app.get("/:id", (req, res) => {
  visitCounts["/:id"]++;
  const movieId = parseInt(req.params.id);
  const movie = database1.find((m) => m._id === movieId);

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
