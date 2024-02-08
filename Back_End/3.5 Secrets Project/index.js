//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is KhulJa

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userisauthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


function checkpassword(req, res, next) {
  const password = req.body["password"];

  if (password === "KhulJa") {
    userisauthorised = true;
    
  }
  next();
}
app.use(checkpassword);

app.post("/check", (req, res) => {
  if (userisauthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    res.send("Wrong password");
  }
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
