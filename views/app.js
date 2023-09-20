
// EXAMPLE 1
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


// EXAMPLE 2

const fs = require('fs');

const input = process.argv;

if (input[2] == "add") {
    fs.writeFileSync(input[3], input[4])
} else if (input[2] == 'remove') {
    fs.unlinkSync(input[3])
} else {
    console.log('invalid input');

}

// EXAMPLE -3

const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, "views");

const filepath = `${dirpath}/apple.txt`;

// TEXT ADD IN FILE
fs.writeFileSync(filepath, "sjdfsabfd sjfdbhsbhfd saafdbhsbhkfd sdfbasbfd")

// READ

fs.readFile(filepath, 'UTF-8', (err, res) => {
    console.log(res);
})

// UPDATE

fs.appendFile(filepath, ' and this is simpla text you write', (err) => {
    if (!err) {
        console.log('file is updated');
    }
})

// RENAME

fs.rename(filepath, `${dirpath}/fruite.txt`, (err) => {
    if (!err) {
        console.log('file if update');
    }
})

// DELETE

fs.unlinkSync(`${dirpath}/fruite.txt`)