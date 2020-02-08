export const APIKEY = "QIHOUY8RAT3SPAK7";

export const STOCK_ORACLE_ADDRESS =
  "0x20D8cCEC5F8C964BB6d578e8051db557cCe85626";

export const STOCK_ORACLE_ABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    constant: false,
    inputs: [
      {
        name: "symbol",
        type: "bytes4"
      },
      {
        name: "price",
        type: "uint256"
      },
      {
        name: "volume",
        type: "uint256"
      }
    ],
    name: "setStock",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "symbol",
        type: "bytes4"
      }
    ],
    name: "getStockPrice",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "symbol",
        type: "bytes4"
      }
    ],
    name: "getStockVolume",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
