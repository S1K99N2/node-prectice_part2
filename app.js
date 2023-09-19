
const user = [
    {
        name: "niraj singh",
        roll: 28,
        class: 10,
        school: "high school"
    }, {
        name: "niraj singh",
        roll: 28,
        class: 10,
        school: "high school"
    },
    {
        name: "niraj singh",
        roll: 28,
        class: 10,
        school: "high school"
    }

]
const http = require("http");
const user = require("./app");

http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'application\JSON' });
    res.write(JSON.stringify(user));
    res.end();
}).listen(5000);