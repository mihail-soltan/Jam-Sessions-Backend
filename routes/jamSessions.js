import Router from 'express';

import {
    getAllSessions,
    createJamSession,
    getOneSession
} from "../controllers/jamSessions.js"

const jamSessionRouter = Router()

jamSessionRouter
    .route("/")
    .get(getAllSessions)
    .post(createJamSession)

jamSessionRouter
    .route("/:id")
    .get(getOneSession)

export default jamSessionRouter