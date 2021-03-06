var mongoose = require('mongoose');

var Chat = mongoose.Schema({
    owners: Array, // array of owner ids
    messages: Array, // array of messages
    name: String, // the name of the chat room this is unique
    color: String // the color the chat room
});

var Model = mongoose.model('Chat', Chat);

/**
 * name = name of room
 * user_id = is the user_id of the creator
 * callback = is a function(err)
 */
Model.createRoom = function(name, user_id, color, callback) {
    Model.findOne({
        name: name
    }, function(err, chat) {
        if(chat) {
            callback('chat already exists');
        } else {
            chat = new Model();
            chat.owners = [user_id];
            chat.name = name;
            chat.color = color;
            chat.save(function(err) {
                if (err) {
                    callback(err);
                } else {
                    callback();
                }
            });
        }
    });
};

module.exports = Model;
