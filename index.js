const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("car doctor is running");
});

app.listen(port, () => {
  console.log(`car doctor is running on port: ${port}`);
});
