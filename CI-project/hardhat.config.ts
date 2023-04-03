import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const {
  DEVNET_RPC_URL,
} = process.env;

function createDevnet() {
  return DEVNET_RPC_URL;
}

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "devnet",
  networks: {
    devnet: {
      url: createDevnet(),
    }
  }
};

export default config;
