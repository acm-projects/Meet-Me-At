function toEventData(id, host, name, location, time, description, guests) {
    return { id: id, host: host, name: name, location: location, time: time, description: description, guests: guests };
}
function toEventTime(start, end) {
    return { start: start, end: end };
}
function toTimeInstant(year, month, day, hour, minute) {
    return { year: year, month: month, day: day, hour: hour, minute: minute }
}

module.exports.toEventData = toEventData;
module.exports.toEventTime = toEventTime;
module.exports.toTimeInstant = toTimeInstant;
