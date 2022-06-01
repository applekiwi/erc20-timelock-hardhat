# ERC20 Token lockup

- Hardhat deploy
- OpenZeppelin TokenTimelock library

## Deploy

- Install packages
- Create .env

```bash
cp .env.sample .env
vi .env
```

- Edit ./contracts/TimeLock.sol
- Deploy

```bash
npx hardhat run --network {NETWORK} scripts/deploys.js
```

## Verify on etherscan

- Verify

```bash
npx hardhat verify --contract "contracts/CONTRACT.sol:TimeLock" --network {NETWORK} {CONTRACT_ADDRESS}
```
