import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tdly from "@tenderly/hardhat-tenderly";
import * as dotenv from "dotenv";

dotenv.config();
tdly.setup({automaticVerifications: true})

const {
    DEVNET_RPC_URL,
} = process.env;

const config: HardhatUserConfig = {
    solidity: "0.8.18",
    networks: {
        tenderly: {
            url: DEVNET_RPC_URL,
            chainId: 1,
        }
    },
    tenderly: {
        project: "devnet-testing",
        username: "Tenderly",
    }
};

export default config;
