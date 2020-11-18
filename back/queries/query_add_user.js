/*
 * Adds a User to the database. If a user with a given username is already in the database, the new user
 * will NOT be added, and the existing user will be returned.
 *
 * Worker Data
 * data - User Data
 *
 * Codes
 * 0 - Query Success
 * 1 - Query Failed (username exists)
 *
 * Return Arguments
 * data - User Data
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
    let user = toUserData(data.name, data.username, data.password, data.email, data.profilePic, data.events);
    await client.connect();
    let coll = await client.getCollection("mma", "users");
    let dbuser = await client.getUser(coll, data.username);
    if (dbuser === undefined || dbuser === null) {
        await client.addUser(coll, user);
        code = 0;
    } else {
        user = dbuser;
        code = 1;
    }
    main.postMessage({ data: user, status: code });
    await client.disconnect();
}
run().then(() => main.close());
