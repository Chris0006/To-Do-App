const express = require('express');
const bodyParser = require('body-parser');
// const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))


let items = [];


app.get("/", function(req, res){
    const date = new Date().getDay();
    let day = "";

    if (date<6) day = 'Weekday';
    else day = 'Weekend';


    res.render('list', {day: day, newListItems: items})
})

app.post("/", function(req, res){
    if (req.body.newItem.length > 0) items.push(req.body.newItem);

    res.redirect("/")
})






app.listen(3000)
