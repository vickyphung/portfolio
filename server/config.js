const mongoose = require("mongoose")
const db = mongoose.connection;

async function main(){
    await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})


db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));


db.on('connected', () => {
    console.log("mongo connection")
})

db.on('disconnected', () => {
    console.log("mongo disconnected")
})
}
db.on('open', () => {
    console.log("connection made")
})
module.exports = main