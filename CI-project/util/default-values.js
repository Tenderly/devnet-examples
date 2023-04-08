const dotenv = require("dotenv");
dotenv.config();

const {
    TENDERLY_PROJECT_SLUG,
    TENDERLY_ACCOUNT_ID,
    TENDERLY_DEVNET_TEMPLATE,
} = process.env;

export function defaultValues() {
    return {
        TENDERLY_PROJECT_SLUG: TENDERLY_PROJECT_SLUG || "devnet-testing",
        TENDERLY_ACCOUNT_ID: TENDERLY_ACCOUNT_ID || "fa4a29af-ad72-44ac-9261-4bf3a8af3a06",
        TENDERLY_DEVNET_TEMPLATE: TENDERLY_DEVNET_TEMPLATE || "devnet-testing-ci",
    };
}