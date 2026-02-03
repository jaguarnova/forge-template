import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";

export default {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
