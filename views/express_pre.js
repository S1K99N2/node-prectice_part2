const express = require('express');
const app = express();
const path = require('path');
const dirpath = path.join(__dirname, 'views');

app.get("", (req, res) => {
    res.send(`
                <input type="text" placeholder="enter_name" value=${req.query.name} />
    `)
})
app.get("/user", (req, res) => {
    res.send([
        {
            name: "niraj",
            roll: 28
        },
        {
            name: "neha",
            roll: 1
        }
    ])
})
app.get("/about", (req, res) => {
    res.send(`hello, niraj how r u about`)
})
app.get("/blog", (req, res) => {
    res.send(`hello, niraj how r u Blog`)
})
app.listen(5000);