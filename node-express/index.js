// https://github.com/expressjs/express/blob/master/examples/web-service/index.js
// https://github.com/expressjs/express/tree/master/examples/mvc

// dependency
const express = require('express'), port = 8080;

let app = express();
let db = require('./db');

app.use(express.json()); // encode/decode json payload


app.get('/health', (req, res) => res.send('I am ok'));

app.get('/stocks', (req, res) => res.send(db.stocks));

app.get('/stocks/:ticker', (req, res) => {
    let ticker = req.params.ticker;
    let index = db.stocks.findIndex(stock => stock.ticker === ticker.toUpperCase());
    let stock = db.stocks[index];
    if (!stock) res.status(404).send();
    res.send(stock);
});

app.post('/stocks', (req, res) => {
    let newStock = req.body;
    let ticker = newStock.ticker.toUpperCase();
    let index = db.stocks.findIndex(stock => stock.ticker === ticker);
    if (db.stocks[index]) {
        res.status(400).send();
    }
    else {
        db.stocks.push(newStock);
        res.status(201).send();
    }
});

app.delete('/stocks/:ticker', (req, res) => {
    let ticker = req.params.ticker;
    console.log("Ticker="+ticker)
    let index = db.stocks.findIndex(stock => stock.ticker === ticker);
    if (db.stocks[index]) {
        db.stocks.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(400).send();
    }
});

app.put('/stocks/:ticker', (req, res) => {
    let ticker = req.params.ticker;
    let stock = req.body;
    let index = db.stocks.findIndex(stock => stock.ticker === ticker);
    if (db.stocks[index]) {
        db.stocks[index] = stock
        res.status(200).send();
    } else {
        res.status(400).send();
    }
});

app.listen(port, '0.0.0.0', () => console.log('App listening on port ' + port));
