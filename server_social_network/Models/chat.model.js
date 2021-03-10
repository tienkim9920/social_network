var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        id_user1: String,
        id_user2: String,
        content: Array
    }
);

const Chat = mongoose.model('Chat', schema, 'chat');

module.exports = Chat;