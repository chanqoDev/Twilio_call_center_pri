const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware test: Logging middleware with time stamp
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("<h1> Howdy twilio </h1>");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
