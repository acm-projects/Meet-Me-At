const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { Query } = require('./query.js');
const sleep = require('system-sleep');
const genId = require("uuid").v4;
const app = express();
const server_port = 5000;
let getRequests = 0;
let postRequests = 0;
app.use(cors());
app.use(bodyParser.json());

app.post('/print', (request, response) => {
    console.log("Data Request Received...");
    console.log(request.body.data);
});

app.post('/get/user', (request, response) => {
    postRequests++;
    console.log(`Post Request (GET USER) ${postRequests} Received...`);
    let data = request.body.username;
    let done = false;
    let query = new Query("./queries/query_get_user.js");
    let thread = query.buildThread(data);
    thread.on("message", (message) => {
        data = message.data;
    });
    thread.on("exit", () => {
        done = true;
    });
    while (!done) {
        sleep(1);
    }
    response.json(data);
});
app.post('/add/user', (request, response) => {
    postRequests++;
    console.log(`Post Request (ADD USER) ${postRequests} Received...`);
    let data = request.body.user;
    let done = false;
    let query = new Query("./queries/query_add_user.js");
    let thread = query.buildThread(data);
    thread.on("exit", () => {
        done = true;
    });
    while (!done) {
        sleep(1);
    }
});
app.post("/update/user", (request, response) => {
    postRequests++;
    console.log(`Post Request (UPDATE USER) ${postRequests} Received...`);
    let data = request.body.user;
    console.log(data);
    let done = false;
    let query = new Query("./queries/query_update_user.js");
    let thread = query.buildThread(data);
    thread.on("exit", () => {
        done = true;
    });
    while (!done) {
        sleep(1);
    }
})

app.post('/get/events', (request, response) => {
    postRequests++;
    console.log(`Post Request (GET EVENTS) ${postRequests} Received...`);
    let data = request.body.user;
    let done = false;
    let events = undefined;
    let query = new Query("./queries/query_get_events.js");
    let thread = query.buildThread(data);
    thread.on("message", (message) => {
        events = message.data;
    });
    thread.on("exit", () => {
        done = true;
    });
    while (!done) {
        sleep(1);
    }
    response.json(events);
});

app.post('/add/event', (request, response) => {
    postRequests++;
    console.log(`Post Request (ADD EVENT) ${postRequests} Received...`);
    let data = request.body.event;
    let done = false;
    let query = new Query("./queries/query_add_event.js");
    let thread = query.buildThread(data);
    thread.on("exit", () => {
        done = true;
    });
    while (!done) {
        sleep(1);
    }
});
app.post("/update/event", (request, response) => {
    postRequests++;
    console.log(`Post Request (UPDATE EVENT) ${postRequests} Received...`);
    let data = request.body.event;
    let done = false;
    let query = new Query("./queries/query_update_event.js");
    let thread = query.buildThread(data);
    thread.on("exit", () => {
        done = true;
    });
    while (!done) {
        sleep(1);
    }
})
app.post("/gen/eventid", (request, response) => {
    postRequests++;
    console.log(`Post Request (GEN EVENT ID) ${postRequests} Received...`);
    let id = genId();
    response.json(id);
})

app.listen(server_port, () => {
    console.log(`Waiting for connections on port ${server_port}...`);
});
