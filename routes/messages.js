import Router from 'express';

import {
    getAllMessages,
    getMessagesByOwnerId,
    getOneMessage,
    createMessage,
    deleteMessage,
    updateMessage
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
    .route("/one/:id")
    .delete(deleteMessage)
    .get(getOneMessage)
    .put(updateMessage)

export default MessageRouter