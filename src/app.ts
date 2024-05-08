import express from "express";

const app = express();

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello from Server!" });
});

export default app;
