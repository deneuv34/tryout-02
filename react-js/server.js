const express = require('express');
const bodyparser = require('body-parser');

const app = express();
let arr = []
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.send(arr)
})

app.post('/', (req,res) => {
    arr.push(req.body.data)
    res.send('added')
    console.log('ARRAY', arr)
})

app.listen(8080, () => console.log('Now browse to localhost:8080/'));
