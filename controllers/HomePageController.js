const express = require('express');
const app = express();
app.set('view engine', 'ejs');


const index = (req,res)=> {
    res.render("../views/pages/home.ejs"); 
};


const dashboard = (req,res)=> {
    res.render("../views/pages/dashboard.ejs"); 
};

const categories = (req,res)=> {
    res.render("../views/pages/categories.ejs"); 
};

const articles = (req,res)=> {
    res.render("../views/pages/Articles.ejs"); 
};









module.exports = {
    index,
    dashboard,
    categories,
    articles,
}