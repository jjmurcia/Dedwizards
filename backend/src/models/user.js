const {Schema, model} = require("mongoose");

const userSchema = Schema({
    email: String,
    password: String
}, {
    timestamsp: true
});

module.exports = model("User", userSchema);