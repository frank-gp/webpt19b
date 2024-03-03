const express = require("express");
const cors = require("cors");
const tempData = require("./tempData.js");

const app = express();
const PORT = process.env.PORT || 3000;
const url = "https://webpt19b.web.app";

app.use(cors());
app.use(express.static("public"));

app.get("/movies", (req, res) => {
  res.json(tempData);
});

// Add a new endpoint to retrieve a specific movie by ID
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

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
