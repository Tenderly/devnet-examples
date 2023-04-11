const dotenv = require("dotenv");
dotenv.config();

const {
    TENDERLY_PROJECT_SLUG,
    TENDERLY_ACCOUNT_ID,
    TENDERLY_DEVNET_TEMPLATE,
} = process.env;

module.exports = function defaultValues() {
    return {
        TENDERLY_PROJECT_SLUG: TENDERLY_PROJECT_SLUG,
        TENDERLY_ACCOUNT_ID: TENDERLY_ACCOUNT_ID,
        TENDERLY_DEVNET_TEMPLATE: TENDERLY_DEVNET_TEMPLATE,
    };
}