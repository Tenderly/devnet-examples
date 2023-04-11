const {ethers} = require("ethers");
const dotenv = require("dotenv");
dotenv.config();

const {
    DEVNET_RPC_URL,
} = process.env;

async function main() {
    const devnetProvider = new ethers.providers.JsonRpcProvider(DEVNET_RPC_URL);

    // 10 accounts with balance 100 available
    const [minterAddress, ownerAddress, spenderAddress, receiverAddress] =
        await devnetProvider.listAccounts();
    const [minterSigner, ownerSigner, spenderSigner] = [
        devnetProvider.getSigner(minterAddress),
        devnetProvider.getSigner(ownerAddress),
        devnetProvider.getSigner(spenderAddress),
        devnetProvider.getSigner(receiverAddress),
    ];

    await minterSigner.sendTransaction({
        to: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
        value: ethers.utils.parseEther("1.0"),
    });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});