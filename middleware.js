const express = require('express');
const app = express();

// Rouer level Middleware 
const reFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('please provide age')
    } else if (req.query.age < 18) {
        res.send('YOU ARE UNDER AGE')
    } else {
        next();
    }
}
app.get("", (req, res) => {
    res.send('<h1>hwllo niraj this is HOME page</h1>')
})
app.get("/blog", reFilter, (req, res) => {
    res.send('<h1>hwllo niraj this is BLOG page</h1>')
})
app.get("/project", (req, res) => {
    res.send('<h1>hwllo niraj this is PROJECT page</h1>')
})
app.listen(5000)
// Application level Middleware 

const reFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('please provide age')
    } else if (req.query.age < 18) {
        res.send('YOU ARE UNDER AGE')
    } else {
        next();
    }
}
app.use(reFilter);
app.get("", (req, res) => {
    res.send('<h1>hwllo niraj this is HOME page</h1>')
})
app.get("/blog", (req, res) => {
    res.send('<h1>hwllo niraj this is BLOG page</h1>')
})
app.get("/project", (req, res) => {
    res.send('<h1>hwllo niraj this is PROJECT page</h1>')
})
app.get("/about", (req, res) => {
    res.send('<h1>hwllo niraj this is ABOUT page</h1>')
})
app.listen(5000);