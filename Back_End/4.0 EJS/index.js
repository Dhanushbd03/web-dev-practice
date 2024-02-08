import express from "express";
const app = express();

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let type = "a weekday ";
  let adv = "work hard ";

  if (day == 0 || day == 6) {
    type = "a weekend ";
    adv = "relax ";
  }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});
app.listen(3000, () => {
  console.log("port is running");
});
