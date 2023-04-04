import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const {
    DEVNET_RPC_URL,
} = process.env;

const config: HardhatUserConfig = {
    solidity: "0.8.18",
    networks: {
        devnet: {
            url: DEVNET_RPC_URL,
        }
    }
};

export default config;
