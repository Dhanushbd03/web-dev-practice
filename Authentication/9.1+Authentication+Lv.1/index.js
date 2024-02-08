import express, { query } from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Secrets",
  password: "2002",
  port: 5432,
});
db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.post("/register", async (req, res) => {
  try {
    const email = req.body.username;
    const password = req.body.password;

    const search = await db.query("select * from users where email=$1", [
      email,
    ]);
    if (search.rows.length > 0) {
      res.send("email already exist");
    } else {
      const result = await db.query(
        "INSERT into Users(email,password) values ($1,$2)",
        [email, password]
      );
      res.render("secrets.ejs");
    }
    
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.username;
    const password = req.body.password;
    var result = await db.query(
      "select email,password from Users where email=$1  ",
      [email]
    );
    if(result.rows.length < 0){
      res.send("Username not found");
    }else{
    const user = result.rows[0];
    const storedpassword = user.password;
    if (password==storedpassword) {
      res.render("secrets.ejs");
    }else{
      res.send("wrong password");

    }
  }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
