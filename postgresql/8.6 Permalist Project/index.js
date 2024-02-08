import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  password: "2002",
  database: "Permalist",
  port: 5432,
});
db.connect();


app.get("/", async (req, res) => {
  try {
    const result = await db.query("select * from items order by id asc");
    const items = result.rows;
    res.render("index.ejs", {
      listTitle:
        new Date().getDate() +
        "/" +
        new Date().getMonth() +
        "/" +
        new Date().getFullYear(),
      listItems: items,
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/add", async (req, res) => {
  try {
    const item = req.body.newItem;
    const newitem = await db.query("insert into items(title) values ($1)", [
      item,
    ]);
    res.redirect("/");
  } catch (err) {
    console.log(err.body);
  }
});

app.post("/edit", async (req, res) => {
  try {
    const item = req.body.updatedItemTitle;
    const id = req.body.updatedItemId;
    await db.query("update items set title = ($1) where id= $2;", [item, id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/delete", async(req, res) => {
  const id =req.body.deleteItemId;
  try{
    await db.query("delete from items where id = $1;",[id]);
    res.redirect("/");
}catch(err)
{
  console.log(err);
}
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
