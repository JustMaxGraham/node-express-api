import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", function(req, res) {
  res.send("Hello")
})
app.get("/error", function(req, res) {
  throw new Error("Oops, something went wrong!")
})

app.use(function(req, res) {
  res.status(404).send("Page Not Found!")
})

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
})

app.listen(3000, function() {
  console.log("App listening on port 3000.")
});