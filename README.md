# Solana SPL Faucet

Make it easy for your test user to test your program on Devnet by allowing them to mint token to themselves.

## Configurations
1. Set the [minter env vars](#env-vars)
2. Set your SPL token details here -> [/src/lib/tokens.ts](/src/lib/tokens.ts) !Minter should have authority to mint these tokens

## Build

Built with Sveltekit.

### Env Vars
```
PUBLIC_MINTER_PUBLIC_KEY= # base 58 address of the minter
PRIVATE_MINTER_PRIVATE_KEY= # uint array private key of minter
```
Minter is the mint authority for your SPL tokens.

### Run Dev Server
```sh
npm install
npm run dev
```

## Production
Tested to work on Vercel with `adapter-node`.

A sample deployment at [https://faucet.arcana.markets](https://faucet.arcana.markets)
