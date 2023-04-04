const dotenv = require("dotenv");
dotenv.config();

const {
    TENDERLY_ACCESS_KEY,
} = process.env;

const command = "./util/tenderly-cli spawn-rpc --project devnet-testing --template devnet-example-ci --account fa4a29af-ad72-44ac-9261-4bf3a8af3a06  --access_key "+ TENDERLY_ACCESS_KEY

const util = require('util');
const fs = require("fs");
const exec = util.promisify(require('child_process').exec);

const createDevNet = async () => {
    const {stderr} = await exec(command);
    const devNetUrl = stderr.trim().toString();

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