function toUserData(name, username, password, email, profilePic, events) {
    return { name: name, username: username, password: password, email: email, profilePic: profilePic, events: events };
}

module.exports.toUserData = toUserData;
