// import cors from "cors"
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
// const { connect } = require("mongoose");
const connectDB = require("./config/db");
const colors = require("colors")
const userRoutes = require("./routes/userRoutes")

dotenv.config();
connectDB();
const app = express();


app.use(cors())

app.get("/", (req,res) => {
    res.send("api is running")    
})

// app.get("/api/chat", (req,res) => {
//     res.send(chats)
// })

app.get('/api/chat', (req, res) => {
    res.send(chats)
    
})

app.use('/api/user',userRoutes)

app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`server is running at port ${PORT}`.yellow.bold))