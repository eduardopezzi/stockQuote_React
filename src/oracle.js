import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { STOCK_ORACLE_ABI, STOCK_ORACLE_ADDRESS } from "./quotecontract";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const APIKEY = "QIHOUY8RAT3SPAK7";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  result: {
    "& > *": {
      margin: theme.spacing(2),
      width: 200
    }
  }
}));

//www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=QIHOUY8RAT3SPAK7

function App() {
  const web3 = new Web3("http://localhost:7545");
  const stockQuote = new web3.eth.Contract(
    STOCK_ORACLE_ABI,
    STOCK_ORACLE_ADDRESS
  );

  const classes = useStyles();
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  const [symbol, setSymbol] = useState("MSFT");

  async function getQuotes() {
    const web3 = new Web3("http://localhost:7545");
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    const stockQuote = new web3.eth.Contract(
      STOCK_ORACLE_ABI,
      STOCK_ORACLE_ADDRESS
    );

    var retval = await stockQuote.methods
      .getStockPrice(web3.utils.fromAscii(symbol))
      .call();
    console.log(retval);
  }

  useEffect(() => {
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${APIKEY}`
    )
      .then(res => res.json())
      .then(res => {
        setData(res["Global Quote"]);
      });
  }, [symbol]);
  console.log(data);

  function handlingChange(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  function onclick(event) {
    event.preventDefault();
    setSymbol(input);
  }

  return (
    <div>
      <h1>Stock Prices Oracle</h1>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="Stock-form"
            label="Stock Symbol"
            variant="outlined"
            size="small"
            onChange={handlingChange}
          />

          <div>
            <Button variant="contained" color="primary" onClick={onclick}>
              Get Quote
            </Button>{" "}
          </div>
        </form>
        <div>
          <TextField
            className={classes.result}
            id="Stock-form"
            label="Symbol"
            variant="outlined"
            size="small"
            InputLabelProps={{
              shrink: true
            }}
            value={data["01. symbol"]}
          ></TextField>
        </div>
        <div>
          <TextField
            className={classes.result}
            id="Stock-form"
            label="Price"
            variant="outlined"
            size="small"
            InputLabelProps={{
              shrink: true
            }}
            value={data["05. price"]}
          ></TextField>
        </div>
        <div>
          <TextField
            className={classes.result}
            id="Stock-form"
            label="Volume"
            variant="outlined"
            size="small"
            InputLabelProps={{
              shrink: true
            }}
            value={data["06. volume"]}
          ></TextField>
        </div>
      </div>
    </div>
  );
}

export default App;
