let mongo = require('mongodb');
let Worker = require('worker_threads').Worker;
let toUserData = require('./user.js').toUserData;
let toEventData = require('./event.js').toEventData;
let toEventTime = require('./event.js').toEventTime;
let toTimeInstant = require('./event.js').toTimeInstant;

/*
 * TODO: GET EVENTS
 */
const ConnectionState = {
    DISCONNECTED: 0,
    CONNECTING: 1,
    CONNECTED: 2
}
class QueryClient {
    #connection_state = ConnectionState.DISCONNECTED;
    #client = undefined;

    constructor() {
        const uri = "mongodb+srv://nick:nick@cluster0.gkxqh.mongodb.net/mma?retryWrites=true&w=majority";
        this.#client = new mongo.MongoClient(uri, { useUnifiedTopology: true });
    }

    async connect() {
        if (this.isConnected() || this.#connection_state !== ConnectionState.DISCONNECTED) return;
        this.#connection_state = ConnectionState.CONNECTING;
        await this.#client.connect();
        if (this.isConnected()) {
            this.#connection_state = ConnectionState.CONNECTED;
        } else {
        }
    }
    async disconnect() {
        if (!this.isConnected()) return;
        await this.#client.close();
        this.#connection_state = ConnectionState.DISCONNECTED;
        this.#client.close();
    }
    isConnected() {
        return this.#connection_state === ConnectionState.CONNECTED || this.#client.isConnected();
    }
    async getDatabase(db_name) {
        if (!this.isConnected()) return;
        return await this.#client.db(db_name);
    }
    async getCollection(db_name, col_name) {
        if (!this.isConnected()) return;
        let db = await this.getDatabase(db_name);
        return await db.collection(col_name);
    }

    async addUser(coll, data) {
        if (!this.isConnected()) return;
        await coll.insertOne({
            name: data.name,
            username: data.username,
            password: data.password,
            email: data.email,
            profilePicture: data.profilePic,
            eventList: data.events
        });
    }
    async getUser(coll, username) {
        if (!this.isConnected()) return;
        let data = await coll.findOne({ username: username });
        if (data === undefined || data === null) {
            return undefined;
        }
        return toUserData(data.name, data.username, data.password, data.email, data.profilePicture, data.eventList);
    }
    async updateUser(coll, data){
        await coll.updateOne(
            { username: data.username },
            {
                $set:{
                    name: data.name,
                    username: data.username,
                    password: data.password,
                    email: data.email,
                    profilePicture: data.profilePic,
                    eventList: data.events
                },
            }
        );
    }
    async deleteUser(coll, username){
        if (!this.isConnected()) return;
        await coll.deleteOne({ username: username });
    }

    async addEvent(coll, userColl, data) {
        if (!this.isConnected()) return;
        await coll.insertOne({
            id: data.id,
            host: data.host,
            name: data.name,
            location: data.location,
            time: data.time,
            description: data.description,
            guestList: data.guests
        });
        await this.syncGuests(coll, userColl, data);
    }
    async getEvent(coll, id){
        if (!this.isConnected()) return;
        let data = await coll.findOne({ id: id });
        if (data === undefined || data === null) {
            return undefined;
        }
        let start = data.time.start;
        let end = data.time.end;
        return toEventData(data.id, data.host, data.name, data.location, toEventTime(
            toTimeInstant(start.year, start.month, start.day, start.hour, start.minute),
            toTimeInstant(end.year, end.month, end.day, end.hour, end.minute)
        ), data.description, data.guestList);
    }
    async updateEvent(coll, userColl, event) {
        await coll.updateOne(
            { id: event.id },
            {
                $set:{
                    id: event.id,
                    name: event.name,
                    location: event.location,
                    time: event.time,
                    description: event.description,
                    guestList: event.guests
                }
            }
        );
        await this.syncGuests(coll, userColl, event);
    }
    async syncGuests(eventColl, userColl, event) {
        for (let i = 0; i < event.guests.length; i++) {
            let username = event.guests[i];
            let user = await this.getUser(userColl, username);
            if (user === null || user === undefined) continue;
            if(user.events === null) continue;
            if (!user.events.includes(event.id)) {
                user.events.push(event.id);
                await this.updateUser(userColl, user);
            }
        }
    }
    async deleteEvent(coll, id) {
        if (!this.isConnected()) return;
        await coll.deleteOne({ id: id });
    }
}
class Query {
    #thread = undefined;
    #queryType = undefined;
    constructor(filename) {
        this.#queryType = filename;
    }
    getThread() {
        return this.#thread;
    }
    buildThread(data) {
        this.#thread = new Worker(this.#queryType, { workerData: { data: data } });
        return this.getThread();
    }
}

module.exports.Query = Query;
module.exports.QueryClient = QueryClient;
