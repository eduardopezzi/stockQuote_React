export const STOCK_ORACLE_ADDRESS =
  "0xd7Aa8e89220a76a88C30AfC431fE516b8f93817e";

export const STOCK_ORACLE_ABI = [
  [
    {
      constant: false,
      inputs: [
        {
          internalType: "bytes4",
          name: "symbol",
          type: "bytes4"
        },
        {
          internalType: "uint256",
          name: "price",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "volume",
          type: "uint256"
        }
      ],
      name: "setStock",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "bytes4",
          name: "symbol",
          type: "bytes4"
        }
      ],
      name: "getStockPrice",
      outputs: [
        {
          internalType: "uint256",
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
          internalType: "bytes4",
          name: "symbol",
          type: "bytes4"
        }
      ],
      name: "getStockVolume",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    }
  ]
];
