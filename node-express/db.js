// fake db
let stocks = exports.stocks = [];

// add one  element
stocks.push(
    {
        id: "whatever",
        ticker: "IBM",
        updated: 1617800307345, // current_millis
        price: 134.18
    }
);

stocks.push(
    {
        id: "another-whatever",
        ticker: "AAPL",
        updated: 1617800307345, // current_millis
        price: 126.21
    }
);
