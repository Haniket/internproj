const mongoose = require("mongoose");

const connectDB = async() => {
// Set up default mongoose connection
const mongoDB = "mongodb+srv://haniket:1234567Hy9@cluster0.unpeukk.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect("mongodb+srv://haniket:1234567Hy9@cluster0.unpeukk.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
}) 
}

module.exports = connectDB;
