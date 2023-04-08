import util from 'util';
import dotenv from 'dotenv';
import fs from 'fs';
import * as childProcess from 'child_process';

import {defaultValues} from "./default-values";

dotenv.config();

const {
    TENDERLY_ACCESS_KEY,
} = process.env;

const {
    TENDERLY_PROJECT_SLUG,
    TENDERLY_ACCOUNT_ID,
    TENDERLY_DEVNET_TEMPLATE,
} = defaultValues();

let command = `tenderly devnet spawn-rpc --project ${TENDERLY_PROJECT_SLUG} --template ${TENDERLY_DEVNET_TEMPLATE} --account ${TENDERLY_ACCOUNT_ID}  --access_key ${TENDERLY_ACCESS_KEY}`

const exec = util.promisify(childProcess.exec);
const createDevNet = async () => {
    const {stderr} = await exec(command);
    const devNetUrl = stderr.trim().toString();

    console.log("DEVNET_RPC_URL=" + devNetUrl)

    // if file not exists, create it
    if (!fs.existsSync('.env')) {
        fs.writeFileSync('.env', '');
    }
    const fileContent = fs.readFileSync('.env', 'utf8');

    const newFileContent = fileContent.replace(/DEVNET_RPC_URL=.*/g, '');
    fs.writeFileSync('.env', newFileContent);
    fs.appendFileSync('.env', 'DEVNET_RPC_URL=' + devNetUrl);
}

createDevNet();