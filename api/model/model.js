const mongoose = require("mongoose");

const dbURI = "mongodb+srv://aungmyomyat874:aungmyomyat874@myblog.r74l7i4.mongodb.net/Blogging"
mongoose
    .connect(dbURI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

const userSchema = new mongoose.Schema({
    userName : String,
    userEmail : String,
    password : String,
});


const User = mongoose.model("User", userSchema);

module.exports = {
    User
}