const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://joalvarado2:G87CVgOZYSCN1CTD@cluster0.omfh5.mongodb.net/usersAngular", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log("database is connnect"))
.catch(err => console.log(err));