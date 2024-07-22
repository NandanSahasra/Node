import express from "express";
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>HomePage</h1>");
});
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact</h1><h2>567890</h2>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>about</h1><p>fghhjkl</p>");
});
app.listen(3000,()=>{
    console.log("server success running");

});