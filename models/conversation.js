import mongoose from 'mongoose';
//participants array

//participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],

const ConversationSchema = new mongoose.Schema(
    {
        name: {required: true, type: String},
        // name: {type: mongoose.Schema.Types.ObjectId, ref: 'JamSession'},
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        description: {required: false, type: String}
    }
)

const Conversation  = mongoose.model('Conversation', ConversationSchema);
export default Conversation;