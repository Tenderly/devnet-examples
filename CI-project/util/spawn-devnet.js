const dotenv = require("dotenv");
dotenv.config();

const {
    TENDERLY_ACCESS_KEY,
    CI,
} = process.env;

let command = "./util/tenderly-cli devnet spawn-rpc --project devnet-testing --template devnet-testing-ci --account fa4a29af-ad72-44ac-9261-4bf3a8af3a06  --access_key "+ TENDERLY_ACCESS_KEY
if (CI === "true") {
    command = "./util/tenderly-cli-linux devnet spawn-rpc --project devnet-testing --template devnet-testing-ci --account fa4a29af-ad72-44ac-9261-4bf3a8af3a06  --access_key "+ TENDERLY_ACCESS_KEY
}

const util = require('util');
const fs = require("fs");
const exec = util.promisify(require('child_process').exec);

const createDevNet = async () => {
    const {stderr} = await exec(command);
    const devNetUrl = stderr.trim().toString();

    console.log("DEVNET_RPC_URL=" + devNetUrl)

    const fs = require('fs');
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