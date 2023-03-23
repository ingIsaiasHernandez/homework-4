const User = require('./user.model');
const Conversation = require('./conversation.model');
const Message = require('./message.model');
const Participant = require('./participant.model');


const reletedModels = () => {
    User.hasMany(Conversation, {foreignKey: 'creatorId'});
    Conversation.belongsTo(User, {foreignKey: 'creatorId'});

    User.hasMany(Message, {foreignKey: 'senderId'});
    Message.belongsTo(User, {foreignKey: 'senderId'});

    User.hasMany(Participant, {foreignKey: 'participant'});
    Participant.belongsTo(User, {foreignKey: 'participant'});

    Conversation.hasMany(Message, {foreignKey: 'conversationId'});
    Message.belongsTo(Conversation, {foreignKey: 'conversationId'});

    Conversation.hasMany(Participant, {foreignKey: 'conversationId'});
    Participant.belongsTo(Conversation, {foreignKey: 'conversationId'});
}

module.exports = reletedModels;


// A User has many Conversations and a Conversation belongs to a User
// A User has many Messages and a Message belongs to a User
// A User has many Participants and a Participant belongs to a User
// A Conversation has many Messages and a Message belongs to a Conversation
// A Conversation has many Participants and a Participant belongs to a Conversation
// Each of these associations includes a foreign key that connects the two associated models.