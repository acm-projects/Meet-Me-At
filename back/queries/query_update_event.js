/*
 * Updates an Event. If the event doesn't exist, the thread exits.
 *
 * Data Needed
 * data - Event Data
 *
 * Codes
 * 0 - Query Success
 * 1 - Query Failed (unexpected error)
 *
 * Return Arguments
 * status - Return Code
 */

const main = require("worker_threads").parentPort;
let workerData = require("worker_threads").workerData;
let QueryClient = require("../query.js").QueryClient;
let toEventData = require("../event.js").toEventData;

async function run() {
    let code = undefined;
    let data = workerData.data;
    let client = new QueryClient();

    await client.connect();
    let coll = await client.getCollection("mma", "events");
    let dbevent = await client.getEvent(coll, data.id);
    if (dbevent !== undefined) {
        let userColl = await client.getCollection("mma", "users");
        await client.updateEvent(coll, userColl, data);
        code = 0;
    } else {
        code = 1;
    }
    main.postMessage({ status: code });
    await client.disconnect();
}
run().then(() => main.close());
