/*
 * Updates a User's information in the database. If a user with a given username is not in the database, then the thread will exit.
 * Data Needed
 * data - User Data
 *
 * Codes
 * 0 - Query Success
 * 1 - Query Failed (username doesn't exist)
 *
 * Return Arguments
 * status - Return Code
 */

const main = require("worker_threads").parentPort;
let workerData = require("worker_threads").workerData;
let QueryClient = require("../query.js").QueryClient;
let toUserData = require("../user.js").toUserData;

async function run() {
    let code = undefined;
    let data = workerData.data;
    let client = new QueryClient();

    await client.connect();
    let coll = await client.getCollection("mma", "users");
    let dbuser = await client.getUser(coll, data.username);
    if (dbuser !== undefined) {
        await client.updateUser(coll, data);
        code = 0;
    } else {
        code = 1;
    }
    main.postMessage({ status: code });
    await client.disconnect();
}
run().then(() => main.close());
