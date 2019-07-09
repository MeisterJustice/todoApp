const mongoose = require("mongoose");
mongoose.set("debug", true);
// CONNECT TO MONGODB
mongoose.connect('mongodb+srv://Justice:Justice1995@justice-u7xaw.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.log("ERROR: ", err.message);
});

mongoose.Promise = Promise;
module.exports.Todo = require("./todo");