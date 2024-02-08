import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>");
  // console.log(req.rawHeaders);
});
app.get("/about", (req, res) => {
  res.send("<button>About Me !</button>");

});
app.get("/contactme", (req, res) => {
  res.send("<h1>CONTACT ME  !</h1>");
});


app.listen(port, () => {
  console.log("Server is running on port " + port);
});
