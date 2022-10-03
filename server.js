const express = require("express"),
    app = express();
const port = 3000;

//setting view engine to ejs
app.set("view engine", "ejs");


// Static Files
app.use(express.static('public'))

//route for index page
app.get("/", function(req, res) {
    res.render("index");
});
// start admin
app.get("/article", function(req, res) {
    res.render("article_page");
});
app.get("/dashboard", function(req, res) {
    res.render("dashboard");
});

app.get("/art", function(req, res) {
    res.render("Articles");
});
app.get("/visiteur", function(req, res) {
    res.render("visiteur");
});
app.get("/categorie", function(req, res) {
        res.render('categories');
    })
    // end  admin
app.get("/home", function(req, res) {
    res.render("home");
});



app.listen(port, function() {
    console.log("Server is running on port 3000 ");
});