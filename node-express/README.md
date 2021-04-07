# node + express
Combination of two libraries.
- [node](https://nodejs.org/en/)
- [expressjs](https://github.com/expressjs/express)

NB! For installing `node`, use [brew](https://brew.sh/) package manager.
```shell
brew install node
```

## Directory structure
```text
.
├── db.js               # fake database (in-memory)
├── package.json        # project metadata, dependencies
├── package-lock.json   # file auto generated
└── index.js            # api endpoints
```

## How to run

```text
npm start
```

Go to [localhost:8080/stocks](http://localhost:8080/stocks) to fetch list of stocks from db.

