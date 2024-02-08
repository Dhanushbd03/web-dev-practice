import  express  from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
const port = 4000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({
extended:true
}));


var data;

app.get("/",async(req,res)=>{
  try{
    const response = await axios.get(`https://bored-api.appbrewery.com/random`);
    const result = response.body;
    res.render("index.ejs",{
    data:result
  })
  }catch(error){
    console.error("Failed to connect ,ERROR CODE:",error.message);

  }
  
});

app.post("/",async(req,res)=>{
  try{
    const type =req.body.type;
    const participants=req.body.participants;
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
    const result = response.data;
    res.render("index.ejs",{
    data:result[Math.floor(Math.random() * result.length)]
  })
  }catch(error){
    console.error("Failed to connect,  ERROR Message:",error.message);
    res.render("index.ejs",{
      error:"no required activity for your selection "

    })
  }
  
});
app.listen(port,()=>{
  console.log(`'Server is running in port ${port}'`);
})