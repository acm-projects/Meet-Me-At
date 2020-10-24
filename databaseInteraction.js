const mongo = require('mongodb');

var ConnectionState = {
    DISCONNECTED: 0,
    CONNECTING: 1,
    CONNECTED: 2
}

//to test things just create collections by adding a document, then test methods on that document or others

class dbInteraction {
    #connection_state = ConnectionState.DISCONNECTED;
    #client = undefined;

    constructor() {
        const uri = //insert your URI here;
        this.#client = new mongo.MongoClient(uri, {useUnifiedTopology: true });
    }

    async connect() {
        if (this.isConnected() || this.#connection_state !== ConnectionState.DISCONNECTED) return;
        console.log("Establishing Database Connection...");
        this.#connection_state = ConnectionState.CONNECTING;
        await this.#client.connect();
        console.log("Connection Established, checking Connection...");
        if (this.isConnected()) {
            this.#connection_state = ConnectionState.CONNECTED;
        } else {
            console.log("NOT CONNECTED");
        }
    }

    async disconnect() {
        if (!this.isConnected()) return;
        console.log("Disconnecting from Database...");
        await this.#client.close();
        console.log("Connection Severed, checking Connection...");
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
        var db = await this.getDatabase(db_name);
        return await db.collection(col_name);
    }

    async addUser(coll, nm, uN, pw, profilePic){
        if (!this.isConnected()) return;
        await coll.insertOne({
            name: nm,
            username: uN,
            password: pw,
            profilePicture: profilePic,
            eventList: [],
        });
    }

    async getUser(coll, uName){
        if (!this.isConnected()) return;
        let user = coll.findOne({username: uName});
        return user;
    }

    async getName(coll){
        if (!this.isConnected()) return;
        var user = await this.getUser(coll);
        let name = Object.keys(user)[1];
        return user[name];
    }

    async getUsername(coll){
        if (!this.isConnected()) return;
        var user = await this.getUser(coll);
        let username = Object.keys(user)[2];
        return user[username];
    }

    async getPassword(coll){
        if (!this.isConnected()) return;
        var user = await this.getUser(coll);
        let pw = Object.keys(user)[3];
        return user[pw];
    }
    
    async updatePassword(coll, uN, updatedPassword){
        await coll.updateOne(
            { username: uN},
            {
              $set:{ password: updatedPassword},
              //$currentDate: { lastModified: true }
            }
          );
    }

    async updateName(coll, uN, updatedName){
        if (!this.isConnected()) return;
        await coll.updateOne(
            { username: uN },
            {
              $set:{ name: updatedName},
              //$currentDate: { lastModified: true }
            }
          );
    }

    async updateProfilePicture(coll, uN, updatedPicLink){
        if (!this.isConnected()) return;
        await coll.updateOne(
            { username: uN },
            {
              $set:{ profilePicture: updatedPicLink},
              $currentDate: { lastModified: true }
            }
          );
    }
    
    async deleteUser(coll, uName){
        if (!this.isConnected()) return;
        await coll.deleteOne({username: uName});
    }

    async addEvent(coll, eventName, eventLocation, eventDate, eventStartTime, eventEndTime){
        if (!this.isConnected()) return;
        await coll.insertOne({
            name: eventName,
            location: eventLocation,
            date: eventDate,
            startTime: eventStartTime,
            endTime: eventEndTime,
            guestlist: []
        });
    }

    async getEvent(coll, eventName){
        if (!this.isConnected()) return;
        let event = coll.findOne({name: eventName});
        return event;
    }

    async getEventName(coll){
        if (!this.isConnected()) return;
        var event = await this.getEvent(coll);
        let name = Object.keys(event)[1];
        return event[name];
    }

    async getEventLocation(coll){
        if (!this.isConnected()) return;
        var event = await this.getEvent(coll);
        let location = Object.keys(event)[2];
        return event[location];
    }

    async getEventDate(coll){
        if (!this.isConnected()) return;
        var event = await this.getEvent(coll);
        let date = Object.keys(event)[3];
        return event[date];
    }

    async getEventStartTime(coll){
        if (!this.isConnected()) return;
        var event = await this.getEvent(coll);
        let startTime = Object.keys(event)[4];
        return event[startTime];
    }

    async getEventEndTime(coll){
        if (!this.isConnected()) return;
        var event = await this.getEvent(coll);
        let endTime = Object.keys(event)[5];
        return event[endTime];
    }

    async updateEventName(coll, eventName, updatedName){
        await coll.updateOne(
            { name: eventName},
            {
              $set:{ name: updatedName},
              //$currentDate: { lastModified: true }
            }
          );
    }

    async updateEventLocation(coll, eventName, updatedLocation){
        await coll.updateOne(
            { name: eventName},
            {
              $set:{ location: updatedLocation},
              //$currentDate: { lastModified: true }
            }
          );
    }

    async updateEventDate(coll, eventName, updatedDate){
        await coll.updateOne(
            { name: eventName},
            {
              $set:{ date: updatedDate},
              //$currentDate: { lastModified: true }
            }
          );
    }

    async updateEventStartTime(coll, eventName, updatedStartTime){
        await coll.updateOne(
            { name: eventName},
            {
              $set:{ startTime: updatedStartTime},
              //$currentDate: { lastModified: true }
            }
          );
    }

    async updateEventEndTime(coll, eventName, updatedEndTime){
        await coll.updateOne(
            { name: eventName},
            {
              $set:{ endTime: updatedEndTime},
              //$currentDate: { lastModified: true }
            }
          );
    }

    async deleteEvent(coll, eventName){
        if (!this.isConnected()) return;
        await coll.deleteOne({name: eventName});
    }

    async addEventGuest(coll, eventName, user){
        if (!this.isConnected()) return;
        await coll.updateOne(
            { name: eventName},
            {
                $push: {guestlist: user},
            }
        );
    }

    async addEventToUser(coll, uName, event){
        if (!this.isConnected()) return;
        await coll.updateOne(
            {username: uName},
            {
                $push: {eventList: event},
            }
        );
    }
  
}

var currentUser = new dbInteraction();
var currentEvent = new dbInteraction();

async function addThisUser(){
    try{
        await currentUser.connect();
        var coll = await currentUser.getCollection("mmaDB", "users");
        await currentUser.addUser(coll, "Array Man", "ArrayUsername", "ArrayTest123!", "jsonpics.com/arraytest");  
    } finally {
        currentUser.disconnect();
    }
}

async function getThisUser() {
    try {
        await currentUser.connect();
        var coll = await currentUser.getCollection("mmaDB", "users");
        var user = await currentUser.getUser(coll, "samrowens2");
        console.log(user);
    } finally {
        await currentUser.disconnect();
        return user;
    }
}

async function getThisName(){
    try {
        await currentUser.connect();
        var coll = await currentUser.getCollection("mmaDB", "users");
        var user = await currentUser.getUser(coll, "samrowens2");
        var name = Object.keys(user)[1];
        console.log(user[name]);
    } finally {
        await currentUser.disconnect();
        return user[name];
    }
}

async function getThisUsername() {
    try {
        await currentUser.connect();
        var coll = await currentUser.getCollection("mmaDB", "users");
        var user = await currentUser.getUser(coll, "samrowens2");
        var username = Object.keys(user)[2];
        console.log(user[username]);
    } finally {
        await currentUser.disconnect();
        return user[username];
    }
}

async function getThisPassword(){
    try {
        await currentUser.connect();
        var coll = await currentUser.getCollection("mmaDB", "users");
        var user = await currentUser.getUser(coll, "samrowens2");
        var password = Object.keys(user)[3];
        console.log(user[password]);
    } finally {
        await currentUser.disconnect();
        return user[password];
    }
}

async function updateThisPassword(){
    try {
        await currentUser.connect();
        var coll = await currentUser.getCollection("mmaDB", "users");
        await currentUser.updatePassword(coll, "samrowens2", "pwUpdatedFromPW");
    } finally{
        currentUser.disconnect();
    }   
}

async function updateThisName(){
    try {
        await currentUser.connect();
        var coll = await currentUser.getCollection("mmaDB", "users");
        await currentUser.updateName(coll, "samrowens2", "stocktonName");
    } finally{
        currentUser.disconnect();
    }   
}

async function updateThisProfilePic(){
    try {
        await currentUser.connect();
        var coll = await currentUser.getCollection("mmaDB", "users");
        await currentUser.updateName(coll, "samrowens2", "stockton.com/profilepic22");
    } finally{
        currentUser.disconnect();
    }   
}

async function deleteThisUser(){
    try{
        await currentUser.connect();
        var coll = await currentUser.getCollection("mmaDB", "users");
        await currentUser.deleteUser(coll, "");
    } finally {
        console.log("User successfully deleted.");
        currentUser.disconnect();
    }   
}

async function addOneEventToUser(){
    try{
        var event = await getThisEvent();
        await currentUser.connect();
        var coll = await currentUser.getCollection("mmaDB", "users");
        await currentUser.addEventToUser(coll, "ArrayUsername", event);
    } finally {
        currentUser.disconnect();
    }
}

async function addThisEvent(){
    try{
        await currentEvent.connect();
        var coll = await currentEvent.getCollection("mmaDB", "events");
        await currentEvent.addEvent(coll, "ArrayTestBash", "2416 Campbell St", "10/30/20", "1:00 pm", "3:00 pm");  
    } finally {
        currentEvent.disconnect();
    }
}

async function getThisEvent() {
    try {
        await currentEvent.connect();
        var coll = await currentEvent.getCollection("mmaDB", "events");
        var event = await currentEvent.getEvent(coll, "UniqueBash");
        console.log(event);
    } finally {
        await currentEvent.disconnect();
        return event;
    }
}

async function getThisEventLocation(){
    try {
        await currentEvent.connect();
        var coll = await currentEvent.getCollection("mmaDB", "events");
        var event = await currentEvent.getEvent(coll, "UniqueBash");
        var location = Object.keys(event)[2];
        console.log(event[location]);
    } finally {
        await currentEvent.disconnect();
        return event[location];
    }
}

async function getThisEventDate(){
    try {
        await currentEvent.connect();
        var coll = await currentEvent.getCollection("mmaDB", "events");
        var event = await currentEvent.getEvent(coll, "UniqueBash");
        var date = Object.keys(event)[3];
        console.log(event[date]);
    } finally {
        await currentEvent.disconnect();
        return event[date];
    }
}

async function getThisEventStartTime(){
    try {
        await currentEvent.connect();
        var coll = await currentEvent.getCollection("mmaDB", "events");
        var event = await currentEvent.getEvent(coll, "UniqueBash");
        var startTime = Object.keys(event)[4];
        console.log(event[startTime]);
    } finally {
        await currentEvent.disconnect();
        return event[startTime];
    }
}

async function getThisEventEndTime(){
    try {
        await currentEvent.connect();
        var coll = await currentEvent.getCollection("mmaDB", "events");
        var event = await currentEvent.getEvent(coll, "UniqueBash");
        var endTime = Object.keys(event)[5];
        console.log(event[endTime]);
    } finally {
        await currentEvent.disconnect();
        return event[endTime];
    }
}

async function updateThisEventName(){
    try {
        await currentEvent.connect();
        var coll = await currentEvent.getCollection("mmaDB", "events");
        await currentEvent.updateEventName(coll, "Unique Bash", "King Bash");
    } finally{
        currentEvent.disconnect();
    }   
}

async function updateThisEventLocation(){
    try {
        await currentEvent.connect();
        var coll = await currentEvent.getCollection("mmaDB", "events");
        await currentEvent.updateEventLocation(coll, "UniqueBash", "1212 Unique St");
    } finally{
        currentEvent.disconnect();
    }   
}

async function updateThisEventDate(){
    try {
        await currentEvent.connect();
        var coll = await currentEvent.getCollection("mmaDB", "events");
        await currentEvent.updateEventDate(coll, "UniqueBash", "12/13/20");
    } finally{
        currentEvent.disconnect();
    }   
}

async function updateThisEventStartTime(){
    try {
        await currentEvent.connect();
        var coll = await currentEvent.getCollection("mmaDB", "events");
        await currentEvent.updateEventStartTime(coll, "UniqueBash", "6:00 pm");
    } finally{
        currentEvent.disconnect();
    }   
}

async function updateThisEventEndTime(){
    try {
        await currentEvent.connect();
        var coll = await currentEvent.getCollection("mmaDB", "events");
        await currentEvent.updateEventEndTime(coll, "UniqueBash", "10:00 pm");
    } finally{
        currentEvent.disconnect();
    }   
}

//Array guestlist is filled with usernames rather than entire user objects to prevent infinite referencing (since both objects have arrays of the other kind of object)
//Array eventList inside of user objects contains entire event objects
async function addOneEventGuest(){
    try{
        var username = await getThisUsername();
        await currentEvent.connect();
        var coll = await currentEvent.getCollection("mmaDB", "events");
        await currentEvent.addEventGuest(coll, "UniqueBash", username);
    } finally {
        currentEvent.disconnect();
    }
}




//////////////////How to test methods////////////////

//getThisUser();
//getThisName();
//getThisUsername();
//getThisPassword();
//addThisUser();
//updateThisPassword();
//updateThisName();
//updateThisProfilePic();
//deleteThisUser();
//addThisEvent();
//getThisEvent();
//getThisEventLocation();
//getThisEventDate();
//getThisEventStartTime();
//getThisEventEndTime();
//updateThisEventStartTime();
//updateThisEventName();
//updateThisEventEndTime()
//updateThisEventLocation();
//updateThisEventDate();
//addOneEventGuest();
//addOneEventToUser();