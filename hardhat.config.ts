import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.4.17",

  networks: {
    local: {
      url: "http://localhost:4242",
    },
  },
};

export default config;
