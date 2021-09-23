// group id, owner id, message content
import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        group_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
        content: {type: String, required: true},
    }
)

const Message  = mongoose.model('Message', MessageSchema);
export default Message;