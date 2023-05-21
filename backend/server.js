const express = require("express");
const app = express();
const config = require("./config");

const PORT = process.env.PORT || 8080;

const MOBILE = config.MOBILE;

// Middleware test: Logging middleware with time stamp
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

//  Twilio SMS Verify Endpoints
app.get("/test", (req, res) => {
  res.send("wecome to twilio 101");
});

app.get("/login", (req, res) => {
  console.log("login in ... ");
});

app.get("/verify", (req, res) => {
  console.log("verifying code");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// Access sensitive information from the config file
console.log(MOBILE);
