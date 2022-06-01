require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    mainnet: {
      url: process.env.MAINNET_RPC_ENDPOINT,
      accounts: [process.env.MAINNET_PRIVATE_KEY],
      chainId: 1,
      gas: "auto",
      gasPrice: "auto"
    },
    goerli: {
      url: process.env.GOERLI_RPC_ENDPOINT,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
      chainId: 5,
      gas: "auto",
      gasPrice: "auto"
    }

  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
