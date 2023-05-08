# Foundry Setup with DevNet

This guide explains how to set up Foundry with DevNet and deploy a smart contract.

## Environment Setup

1. Create a `.env` file in the project root and populate it with the following variables:

```
DEVNET_RPC_URL=
PRIVATE_KEY=
TDLY_PROJECT_SLUG=
TDLY_TEMPLATE_SLUG=
```

2. Source the `.env` file:

```bash
source .env
```

Alternatively, you can use the `spawn-devnet.sh` script to create a new DevNet instance and populate the `.env` file:

```bash
./spawn-devnet.sh
```

**Note**: Running tests on top of DevNet is currently not possible due to the nature of the Forge implementation.

## Forge Create

To create a new instance of the `Counter` contract, run the following command:

```bash
forge create --rpc-url=$DEVNET_RPC_URL ./src/Counter.sol:Counter --unlocked --from 0x0000000000000000000000000000000000000000
```

## Forge Script

To run the `Counter` script, execute the following command:

```bash
forge script script/Counter.s.sol:CounterScript --rpc-url $DEVNET_RPC_URL --broadcast -vvvv
```

This will run the script and interact with the DevNet instance using the provided RPC URL. The `-vvvv` flag increases verbosity for debugging purposes.