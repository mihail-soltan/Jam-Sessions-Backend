import Router from 'express';

import {
    getAllConversations,
    createConversation,
    getOneConversation,
    deleteConversation
} from "../controllers/conversations.js"

const ConversationRouter = Router()

ConversationRouter
    .route("/")
    .get(getAllConversations)
    .post(createConversation)

ConversationRouter
    .route("/:id")
    .get(getOneConversation)
    .delete(deleteConversation)

export default ConversationRouter