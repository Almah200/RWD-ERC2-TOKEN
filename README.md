# TITLE AND DISCRIPTION

This is an implementation and interaction of a simple **ERC20-TOKEN**
This project has a front-end interface for intracting with an ERC20 token by `checking acount balances` and `transfering`tokens between accounts

## Installations

you need to have this installed

- Install Metamask wallet on your browser
- Access remix ide on [here](remix.ethereum.org)
- Codig environment i.e Visual studio code

## Usage

Follow this instructions to install and interact with this Dapp

- clone this repository using
  `git clone https://github.com/Almah200/RWD-ERC2-TOKEN`
  This is the front-end interfacce of the Dapp
- Install metamask wallet on your browser [here](https://metamask.io/) and create a wallet and create 2 addresses for the interaction i.e account 1 and account 2
- Open remix ide, create afile named rwandaToken.sol and copy the code from the local rwandaToken.sol file in the reposiroty to it.
- deploy the contract while under injected Provider-metamask . make sure your metamask wallet is open and connected on the sepolia test net . get some sepolia test faucets to pay for the gas fees needed to deploy the contract
- when deploying you wil need to indicate the initial token supply, put any amount i.e for my case

1000000. add another 18 zeros to matach the wei in ethereum making it long for my case
         **1000000000000000000000000**
         Deploy an confirm with your metmask wallet

- After successfull deployment, view your contract on the etherscan sepolia network and get its address and on remix under the deployed contract get the the ABI
  \*On the clone local repository,go to app.js file and paste both contract address and ABI on there sections. This would enable interaction from the front-end
- you will need to import the token on our metamask wallet with the import token option. paste the deployed contract address and provide 18 as decimal place and import it. you will immediately see your initial token on your wallet address 1 or 2 as you selected.
  you can now transfer token to the other address i.e 2 if the initaltokens went to address 1. but you will still have to import the sent tokens to address 2 again since the wallet doesnt have that token.
- All is done and you can use the front-end
  to interact with the Dapp but checking accont addresses and tramsfer the tokens between the 2 accounts 1 and 2. byt connecting to a wallet using the button and provide account address to check balance or send tokens
