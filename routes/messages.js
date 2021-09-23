import Router from 'express';

import {
    getAllMessages,
    getMessagesByOwnerId,
    createMessage,
    deleteMessage
} from "../controllers/messages.js"
import Message from '../models/message.js';

const MessageRouter = Router()

MessageRouter
    .route("/")
    .get(getAllMessages)
    .post(createMessage)
    

MessageRouter
    .route("/:owner_id")
    .get(getMessagesByOwnerId)

MessageRouter
    .route("/:id")
    .delete(deleteMessage)

export default MessageRouter