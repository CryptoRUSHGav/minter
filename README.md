# minter

mint algorand NFTs from node.js following [ARC-69](https://github.com/algokittens/arc69)

## Setup

You will need node (https://nodejs.org/en/). After cloning the repo, `npm install` or `yarn install` should install all dependencies.

### Accounts

- Make an https://nft.storage/ account and put the key in `.env` as the `NFTSTORAGE_KEY`.
- Specify your Algorand Node Environment:
  - `ALGO_NODE_ENV` should be 'MainNet' or 'TestNet'
  - Depending on what `ALGO_NODE_ENV` is set to the system will use the TESTNET\_ or regular server, token, and port settings.
- Make a testnet account using your wallet of choice, [fund it](https://bank.testnet.algorand.network/) and put the mnemonic in the `.env` as `MNEMONIC`. The format should be space-delimited, not comma-delimited.

### Example Environment Configuration File

`.env`

```
ALGO_NODE_ENV="TestNet"
NFTSTORAGE_KEY=""
MNEMONIC="your mnemonic keyphrase is probably twenty five words"
TESTNET_ALGO_SERVER=https://testnet-api.algonode.cloud
TESTNET_ALGO_PORT=443
TESTNET_ALGO_TOKEN=
ALGO_SERVER=https://mainnet-api.algonode.cloud
ALGO_PORT=443
ALGO_TOKEN=
```

### Variables

In `server.js`, change the following variables for your project:

```js
const UNIT_PREFIX = "BUB-"; // Prefix before identifying number in unit name. eg. "BUB-1", "BUB-2",...
const ASSET_PREFIX = "Algobubble #"; // Prefix before identifying number in asset name
const DESCRIPTION = "generative bubbles";
const MIME_TYPE = "image/png"; // if .jpg, use image/jpg etc.
const EXTERNAL_URL = ""; // external URL, NOT the image URL (could be project URL, etc)
```

### Images

Put your images to be minted in the `/images` directory.

### Properties

Edit `properties.csv` to contain the appropriate data for your project. Each row _must_ contain `filename`, but you can leave columns empty and they won't be populated. eg.
|filename |a |b |c |d |e |
|-----------------|-----|-----|-----|-----|-----|
|1641042139996.png|testA|testB|testC|testD|testE|
|1641042143236.png|testF|testG|testH|testI|testJ|
|1641042146100 |testK|testL| |testN|testO|

## Running

To run, simply execute `node server.js`. If all goes well, you should see some messages being logged relating to your transactions.

The system keeps track of what it has minted so users do not have to start from scratch every time the script is run. If you wish to start from scratch ensure no `state.json` file exists at the project root. If one does, delete it. It is safe to do so.

## Tip

This tool is completely free to use, but if you want to send me an NFT or a few ALGO in thanks you can hit me up on Twitter (https://twitter.com/AlgofishExe) or send to `FISHEXEW6C4H6PRREM4OLBQ3EOMI2ETUBM2C3UCNHSV33LA5RTM6A577T4` :)

If my updates have helped you, feel free to send me a nice tweet. My Twitter handle is [@CryptoRUSH_Gav](https://twitter.com/CryptoRUSH_Gav), or buy me a coffee. My NFD address is `cryptorush.algo`.

## Release Notes

v1.1.0 (by @CryptoRUSH_Gav):

1. Added ability for script to start where it left off. If you wish to start over, make sure to delete the `state.json` file.
2. Updated `algosdk`, `nft.storage` dependencies
3. Updated `.env` file. You can now control which environment you are running on straight from the `.env` file.
4. Added an `.env.example` file. When starting a new project, just copy it to `.env` and update the configuration as necessary.
