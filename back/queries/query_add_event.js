/*
 * Creates an Event.
 *
 * Data Needed
 * data - Event Data
 *
 * Codes
 * 0 - Query Success
 * 1 - Query Failed (unexpected error)
 *
 * Return Arguments
 * data - Event Data
 * status - Return Code
 */
const main = require("worker_threads").parentPort;
let workerData = require("worker_threads").workerData;
let QueryClient = require("../query.js").QueryClient;
let toEventData = require("../event.js").toEventData;
const genId = require("uuid").v4;

async function run() {
    let code = undefined;
    let data = workerData.data;
    let client = new QueryClient()
    if (data.id === undefined || data.id === null || data.id === "") {
        data.id = genId();
    }

    await client.connect();
    let coll = await client.getCollection("mma", "events");
    let userColl = await client.getCollection("mma", "users");
    await client.addEvent(coll, userColl, data);
    code = 0;
    main.postMessage({ data: data, status: code });
    await client.disconnect();
}
run().then(() => main.close());
