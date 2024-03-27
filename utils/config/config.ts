import { MD5 } from "crypto-js";

const publicKey = "fc7c1e82d26f5f9afc8af2389d78f954";
const privateKey = "448575dcb47ddcfdebd648156d32f863dc30a17f";
const timestamp = Date.now();
const hash = MD5(`${timestamp}${privateKey}${publicKey}`).toString();

export { publicKey, timestamp, hash };
