const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        //group have so many users that's why we need a array
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
            },
        ],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
    },
    {
        timestamp: true,

    }
)

const chat = mongoose.Model("chat",chatModel);

module.exports = chat;


// chatName
// isGroupChat
// user
// groupAdmin
// latestMessage
