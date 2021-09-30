import Router from 'express';

import {
    getAllSessions,
    createJamSession,
    getOneSession,
    searchSessions
} from "../controllers/jamSessions.js"

const jamSessionRouter = Router()

jamSessionRouter
    .route("/")
    .get(getAllSessions)
    .post(createJamSession)

jamSessionRouter
    .route("/foundsessions")
    .get(searchSessions)

jamSessionRouter
    .route("/:id")
    .get(getOneSession)

export default jamSessionRouter