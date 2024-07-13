const contractAddress = "0xd605fd8aab8df273ebbfc3fdaad6d57991dda460";
const contractABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

let provider;
let signer;
let contract;

const connectWallet = async () => {
  try {
    await ethereum.request({ method: "eth_requestAccounts" });
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, signer);
    document.getElementById("connectButton").innerText = "Wallet Connected";
    getTokenInfo();
  } catch (error) {
    console.error("Error connecting wallet:", error);
  }
};

const getTokenInfo = async () => {
  try {
    const name = await contract.name();
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();
    document.getElementById("tokenName").innerText = name;
    document.getElementById("tokenSymbol").innerText = symbol;
    document.getElementById("totalSupply").innerText = ethers.utils.formatUnits(
      totalSupply,
      18
    );
  } catch (error) {
    console.error("Error fetching token info:", error);
  }
};

const getBalanceOf = async () => {
  console.log("getBalanceOf function called");
  try {
    const address = document.getElementById("balanceOfAddress").value;
    const balance = await contract.balanceOf(address);
    document.getElementById("balance").innerText = ethers.utils.formatUnits(
      balance,
      18
    );
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
};

const transferTokens = async () => {
  console.log("transferTokens function called");
  try {
    const to = document.getElementById("transferTo").value;
    const amount = document.getElementById("transferAmount").value;
    const amountInWei = ethers.utils.parseUnits(amount, 18);
    const tx = await contract.transfer(to, amountInWei);
    await tx.wait();
    alert("Transfer successful");
  } catch (error) {
    console.error("Error transferring tokens:", error);
  }
};

document
  .getElementById("connectButton")
  .addEventListener("click", connectWallet);
document
  .getElementById("balanceOfButton")
  .addEventListener("click", getBalanceOf);
document
  .getElementById("transferButton")
  .addEventListener("click", transferTokens);
