/* Utilities */
import fs from "fs";

export function algoNodeSettings() {
  if (process.env.ALGO_NODE_ENV.toUpperCase() === "MAINNET") {
    return {
      server: process.env.ALGO_SERVER,
      port: process.env.ALGO_PORT,
      token: process.env.ALGO_TOKEN,
    };
  }

  return {
    server: process.env.TESTNET_ALGO_SERVER,
    port: process.env.TESTNET_ALGO_PORT,
    token: process.env.TESTNET_ALGO_TOKEN,
  };
}

export async function readState() {
  let data;
  try {
    data = await fs.promises.readFile("./state.json", "utf-8");
  } catch (err) {
    if (err.code === "ENOENT") {
      // The state file does not exist, create it
      await fs.promises.writeFile("./state.json", "{}", "utf-8");
    } else {
      console.error(`There was an error reading the state file: ${err}`);
      return {};
    }
  }
  let state = {};
  if (data) {
    state = JSON.parse(data);
  }
  return state;
}

export async function writeState(state) {
  try {
    await fs.promises.writeFile("./state.json", JSON.stringify(state), "utf-8");
  } catch (err) {
    console.error(`There was an error saving the state: ${err}`);
  }
}
