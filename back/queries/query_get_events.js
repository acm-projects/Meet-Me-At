/*
 * Grab's all the events that a user is invited to.
 *
 * Data Needed
 * data - User Data
 *
 * Codes
 * 0 - Query Success
 * 1 - Query Failed (user doesn't exist)
 *
 * Return Arguments
 * data - Event List
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
    let dbevent = await client.getUser(coll, data.username);
    if (dbevent !== undefined) {
        events = [];
        let eventdb = await client.getCollection("mma", "events");
        if (dbevent.events === undefined || dbevent.events === null) {
        } else {
            for (let i = 0; i < dbevent.events.length; i++) {
                let id = dbevent.events[i];
                if (id === null || id === undefined || id === "") {
                    continue;
                }
                let event = await client.getEvent(eventdb, id);
                if (event !== undefined) {
                    events.push(event);
                }
            }
        }
        code = 0;
    } else {
        events = undefined;
        code = 1;
    }
    main.postMessage({ data: events, status: code });
    await client.disconnect();
}
run().then(() => main.close());
