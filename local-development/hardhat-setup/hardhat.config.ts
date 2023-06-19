import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import * as tdly from "@tenderly/hardhat-tenderly";
import * as dotenv from "dotenv";

tdly.setup({
    automaticVerifications: true,
});

dotenv.config();

const {
    DEVNET_RPC_URL,
} = process.env;

function createDevnet() {
    return DEVNET_RPC_URL;
}

const config: HardhatUserConfig = {
    solidity: "0.8.18",
    defaultNetwork: "tenderly_devnet",
    networks: {
        tenderly_devnet: {
            url: createDevnet(),
        }
    },
    tenderly: {
        username: "filipTenderly", // tenderly username (or organization name)
        project: "test", // project name
        privateVerification: false // if true, contracts will be verified privately, if false, contracts will be verified publicly
    }
};

export default config;
