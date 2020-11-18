const mongoose = require('mongoose');
const { User } = require('./user.js');
function addUser(data) {
    mongoose.connect('mongodb+srv://nick:nick@cluster0.gkxqh.mongodb.net/mma?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true})
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        const user = new User({
            name: data.name,
            username: data.username,
            password: data.password,
            profilePic: data.profilePic,
            events: data.events
        });
        user.save((err) => {
            if (err) return console.error(err);
        });
    });
}
module.exports.addUser = addUser;
