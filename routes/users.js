import Router from 'express';

import {
    getAllUsers,
    getOneByUserName,
    createUser,
    login,
    getMe
} from "../controllers/users.js"

import {
    protect
} from "../middleware/auth.js"

const usersRouter = Router()

usersRouter
    .route("/")
    .get(getAllUsers)
    .post(createUser)

usersRouter
    .route("/login")
    .post(login)

usersRouter
    .route("/me")
    .get(protect, getMe)

usersRouter
    .route("/:userName")
    .get(getOneByUserName)

export default usersRouter