const HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = process.env.MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    kovan: {
      provider: function () {
        return new HDWalletProvider(
          MNEMONIC,
          `https://kovan.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        );
      },
      network_id: 42,
    },
    okt: {
      provider: () =>
        new HDWalletProvider(MNEMONIC, `wss://exchaintestws.okex.org:8443`),
      network_id: 65,
      confirmations: 5,
      timeoutBlocks: 2000,
    },
    heco: {
      provider: () =>
        new HDWalletProvider(MNEMONIC, `wss://ws-testnet.hecochain.com`),
      network_id: 256,
      confirmations: 5,
      timeoutBlocks: 200,
    },
    clover: {
      provider: () =>
        new HDWalletProvider(MNEMONIC, `https://rpc.clover.finance`),
      network_id: 1023,
      confirmations: 2,
      timeoutBlocks: 200,
    },
    celo: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://alfajores-forno.celo-testnet.org`
        ),
      network_id: 44787,
      confirmations: 1,
      gas: 20000000,
    },
    polygon: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://matic-mumbai.chainstacklabs.com/`
        ),
      network_id: 80001,
    },
    metis: {
      provider: () =>
        new HDWalletProvider(MNEMONIC, `https://stardust.metis.io/?owner=588`),
      network_id: 588,
    },
    meter: {
      provider: () =>
        new HDWalletProvider(MNEMONIC, `https://rpctest.meter.io/`),
      network_id: 83,
    },
    theta: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://eth-rpc-api-testnet.thetatoken.org/rpc`
        ),
      network_id: 365,
      confirmations: 1,
      timeoutBlocks: 5000,
    },
    avax: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://api.avax-test.network/ext/bc/C/rpc`
        ),
      network_id: "43113", // chainID is 43113 but reports 1, replace with *
    },
    iota: {
      provider: () =>
        new HDWalletProvider(MNEMONIC, `https://evm.wasp.sc.iota.org/`),
      network_id: 1074,
      timeout: 60000,
    },
    binance: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `wss://data-seed-prebsc-2-s1.binance.org:8545/`
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    evmos: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://evmos-evm-rpc.tk/`
        ),
      network_id: "9000",
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      version: "pragma",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
