/*
 * Grab's a user given a username.
 *
 * Data Needed
 * data - Username
 *
 * Codes
 * 0 - Query Success
 * 1 - Query Failed (user doesn't exist)
 *
 * Return Arguments
 * data - User Data
 * status - Return Code
 */

const main = require("worker_threads").parentPort;
let workerData = require("worker_threads").workerData;
let QueryClient = require("../query.js").QueryClient;


async function run() {
    let code = undefined;
    let data = workerData.data;
    let client = new QueryClient();
    let events = undefined;

    await client.connect();
    let coll = await client.getCollection("mma", "users");
    let user = await client.getUser(coll, data);
    if (user === undefined) {
        code = 1;
    } else {
        code = 0;
    }
    main.postMessage({ data: user, status: code });
    await client.disconnect();
}
run().then(() => main.close());
