const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    fullname: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, {
    versionKey: false
}
);

module.exports = mongoose.model('User', UserSchema);