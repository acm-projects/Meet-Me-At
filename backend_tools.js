const { toUserData } = require('./user.js');
const { toEventData, toEventTime, toTimeInstant } = require('./event.js');
const axios = require('axios');
let account = undefined;

const ip = "99.125.121.169"; // USE THIS IF YOU'RE RUNNING THE BACKEND ON YOUR OWN MACHINE BACKEND "localhost", normal IP is "99.125.121.169"

async function printValue(data) {
    await axios.post(`http://${ip}:5000/print`, { data }).catch((err) => console.error(err));
}
async function getUser(username) {
    let user = undefined;
    await axios.post(`http://${ip}:5000/get/user`, { username }).then((res) => user = res.data).catch((err) => console.error(err));
    return user;
}
async function addUser(user) {
    await axios.post(`http://${ip}:5000/add/user`, { user }).then().catch((err) => console.error(err));
}
async function updateUser(user) {
    await axios.post(`http://${ip}:5000/update/user`, { user }).then().catch((err) => console.error(err));
}
async function getEvents(user) {
    let events = undefined;
    await axios.post(`http://${ip}:5000/get/events`, { user }).then((res) => { events = res.data }).catch((err) => console.error(err));
    events.sort((a, b) => (a.time.start.year < b.time.start.year) ? -1 : 1);
    events.sort((a, b) => (a.time.start.month < b.time.start.month) ? -1 : 1);
    events.sort((a, b) => (a.time.start.day < b.time.start.day) ? -1 : 1);
    events.sort((a, b) => (a.time.start.hour < b.time.start.hour) ? -1 : 1);
    events.sort((a, b) => (a.time.start.minute < b.time.start.minute) ? -1 : 1);
    return events;
}
async function addEvent(event) {
    await axios.post(`http://${ip}:5000/add/event`, { event }).then().catch((err) => console.error(err));
}
async function updateEvent(event) {
    await axios.post(`http://${ip}:5000/update/event`, { event }).then().catch((err) => console.error(err));
}
async function generateId() {
    let generatedId = undefined;
    await axios.post(`http://${ip}:5000/gen/eventid`).then((res) => { generatedId = res.data }).catch((err) => console.error(err));
    return generatedId;
}
function getAccount() {
    return account;
}
function setAccount(user) {
    account = user;
}
function calculateDay(year, month, day) {
    let yearCode = (year % 100 + ((year % 100) / 4)) % 7;
    let monthCodes = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
    let monthCode = monthCodes[month - 1];
    let centuryCode = 6;
    let leapYearCode = 0;
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        if (month === 1 || month === 2) {
            leapYearCode = 1;
        }
    }
    return (yearCode + monthCode + centuryCode + day - leapYearCode) % 7;
}
async function convertEvents(user) {
    let events = await getEvents(user);
    let converted = [];
    for (let i = 0; i < events.length; i++) {
        let event = events[i];
        let e = {
            raw: event,
            key: event.id,
            title: event.name,
            startDate: `${event.time.start.month}/${event.time.start.day}/${event.time.start.year}`,
            endDate: `${event.time.end.month}/${event.time.end.day}/${event.time.end.year}`,
            startTime: `${event.time.start.hour}:${event.time.start.minute}`,
            endTime: `${event.time.end.hour}:${event.time.end.minute}`,
            day: calculateDay(event.time.start.year, event.time.start.month, event.time.start.day),
            about: event.description,
            host: event.host === user.username
        };
        converted.push(e);
    }
    return converted;
}

module.exports.printValue = printValue;
module.exports.toUserData = toUserData;
module.exports.toEventData = toEventData;
module.exports.toEventTime = toEventTime;
module.exports.toTimeInstant = toTimeInstant;
module.exports.getUser = getUser;
module.exports.addUser = addUser;
module.exports.updateUser = updateUser;
module.exports.getEvents = getEvents;
module.exports.addEvent = addEvent;
module.exports.updateEvent = updateEvent;
module.exports.genId = generateId;
module.exports.getAccount = getAccount;
module.exports.setAccount = setAccount
module.exports.convertEvents = convertEvents;
