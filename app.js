const express = require("express");
const bodyParser = require("body-parser");

var items = [];
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/",function(req,res){
    var today = new Date();

    var options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };


   var day = today.toLocaleDateString("en", options) //en is language option, you may specify..

    res.render("lists",{kindOfDay:day,newItem:items});
});

app.post("/",function(req,res){
     items.push(req.body.listItem);
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("the server is running on port 3000");
});