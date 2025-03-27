const mongoose = require("mongoose");


const connectDB = async () => {

    try {
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected Succesfully!");
    } catch (error) {
        console.log("Database Connection Failed! Error: ", error);

    }
}

module.exports = connectDB;