# Early Access Games NFT Marketplace

<i>NFT marketplace for Game Maker to provide early access as NFTs.</i>

#

### How to test

- install metamask.
- get some ether from eg. https://faucets.chain.link/kovan
- visit our marketplace https://nft-login.github.io/nft-marketplace/kovan/#/
- Buy an nft on the market https://nft-login.github.io/nft-marketplace/kovan/#/marketplace
- If you can login here https://nft-login.github.io/nft-login-demo/kovan/ it worked an you own an nft for this game

### Run the DApp Locally

#### Install truffle

```
npm install -g truffle
```

#### Install ganache-cli

```
npm i ganache-cli
```

#### Run ganache-cli

```
ganache-cli --port 8545
```

#### Install dependencies

```
npm install
```

#### Compile smart contract

```
truffle compile
```

#### Deploy smart contract to ganache

```
truffle migrate
```

#### Test smart contract

```
truffle test
```

#### Start DApp

```
npm start
```

- Open metamask browser wallet and connect network to Localhost 8545.
- Import accounts from ganache-cli into the metamask browser wallet to make transactions on the DApp.
