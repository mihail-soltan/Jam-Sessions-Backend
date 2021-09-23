import Router from 'express';

import {
    getAllUsers,
    getOneByUserName,
    createUser
} from "../controllers/users.js"

const usersRouter = Router()

usersRouter
    .route("/")
    .get(getAllUsers)
    .post(createUser)

usersRouter
    .route("/:userName")
    .get(getOneByUserName)

export default usersRouter