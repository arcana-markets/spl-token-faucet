import { PublicKey } from "@solana/web3.js";

export const tokens = [
  {
    name: "USDC Devnet",
    publicKey: new PublicKey("HrXSsRa3zKsAPNkdu9ZSsZvQXAfuZejvcCb2K3wox3Gz"),
    decimals: 9,
    imageUrl: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
  },
  {
    name: "JUP Devnet",
    publicKey: new PublicKey("GoMNscKYCyVfhPiB9G1krh5FeDcGBYH3J4jhJ1jeShNp"),
    decimals: 6,
    imageUrl: "https://static.jup.ag/jup/icon.png",
  },
  {
    name: "PYTH Devnet",
    publicKey: new PublicKey("FV6etEFawMhJrGB656y6Bb6vGfi7qicq6iNk6x86NFWT"),
    decimals: 6,
    imageUrl: "https://pyth.network/token.svg",
  },
  {
    name: "JTO Devnet",
    publicKey: new PublicKey("bzSvVHBjJFE3jDNJ5fhgNG23HZBW2jDUWHUaYLYdbv5"),
    decimals: 9,
    imageUrl: "https://metadata.jito.network/token/jto/image",
  }
];
