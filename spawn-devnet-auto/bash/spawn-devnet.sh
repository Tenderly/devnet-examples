#!/bin/bash

source ${PWD}/.env

# Call CLI command and store response in variable
response=$(tenderly devnet spawn-rpc --template $TENDERLY_DEVNET_TEMPLATE --project $TENDERLY_PROJECT_SLUG 2>&1)

# Set environment variable with response
export DEVNET_RPC_URL="$response"

# Replace existing environment variable in .zshrc file
if grep -q "export DEVNET_RPC_URL=" ~/.zshrc; then
  sed -i.bak "s|export DEVNET_RPC_URL=.*|export DEVNET_RPC_URL=\"$DEVNET_RPC_URL\"|" ~/.zshrc
  rm ~/.zshrc.bak
else
  echo "export DEVNET_RPC_URL=\"$DEVNET_RPC_URL\"" >> ~/.zshrc
fi

# Reload .zshrc file
source ~/.zshrc

echo "Successfully spawned devnet with RPC URL: $DEVNET_RPC_URL"