# Examples for DevNet Local Setup

Setting up DevNets for local development offers several benefits, including faster development and testing, customization of the network state, privacy and security, independence from public testnets, and integration with development tools.

## Prerequisites
Before setting up a DevNet locally, make sure to:

1. Create a [**Tenderly account**](https://dashboard.tenderly.co/register?redirectTo=devnets).
2. Set up a [**DevNet Template**](https://dashboard.tenderly.co/register?redirectTo=devnets) on Tenderly Dashboard.
3. Install the [**Tenderly CLI**](https://docs.tenderly.co/tenderly-cli/installation) and login with your Tenderly credentials.
 

## Hardhat Setup
To set up DevNet with Hardhat:

1. Install Hardhat.
2. Configure `hardhat.config.js` with your DevNet JSON-RPC URL and network name must be either `tenderly` or `devnet`. 

Alternatively, use the `spawn-rpc` CLI command to automate the process.


Refer to the [CI-project example](CI-project) for more details.

## Foundry Setup
To set up DevNet with Foundry:

1. Make sure you have Rust and Foundry.
   1. [Install Rust](https://www.rust-lang.org/tools/install).
   2. [Install Foundry](https://github.com/gakonst/foundry/).
2. Initialize a dummy Foundry project.
```bash
forge init
```
3. Deploy smart contracts using the forge create command.
```bash
forge create --rpc-url=$(tenderly devnet spawnRPC --template <YOUR_TEMPALATE_SLUG> --project <YOUR_PROJECT_SLUG>) ./src/Counter.sol:Counter --unlocked --from 0x0000000000000000000000000000000000000000
```

## Truffle Setup
To set up DevNet with Truffle:

1. Install Truffle.
```bash
npm install -g truffle
```
2. Configure truffle-config.js with your DevNet JSON-RPC URL and Ethereum address.
```javascript
module.exports = {
  networks: {
    devnet: {
      host: "YOUR_DEVNET_JSON_RPC_URL",
      network_id: "*",
      gas: 4700000,
      gasPrice: 20000000000,
      from: "YOUR_ETHEREUM_ADDRESS"
    }
  }
};
```
3. Run `truffle migrate` to deploy your contracts.
```bash
truffle migrate --network devnet
```

## CI Integration
To integrate DevNet with your CI pipeline, use the `spawn-rpc` CLI command to spawn a DevNet instance and get the JSON-RPC URL.

```bash
tenderly devnet spawnRPC --template <YOUR_TEMPALATE_SLUG> --project <YOUR_PROJECT_SLUG>
```

Please refer to the [CI-project example](CI-project) for more details.

# Further Guidance
For more information on DevNet, check out the following resources:
- [DevNet Documentation](https://docs.tenderly.co/devnets)
- [DevNet Known Issues](https://docs.tenderly.co/devnets/references/known-issues)
- [Custom RPC Methods](https://docs.tenderly.co/devnets/references/custom-rpc-methods)
