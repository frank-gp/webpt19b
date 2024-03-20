const express = require("express");
const mainApp = express();
const cors = require("cors");

mainApp.use(cors());
mainApp.use(express.static("public"));

const movies = require("./movies/app.js");
mainApp.use("/movies", movies);

const PORT = process.env.PORT || 3000;
mainApp.listen(PORT, () => {
  console.log(`Main App listening on port http://localhost:${PORT}`);
});
