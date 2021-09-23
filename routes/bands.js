import Router from 'express';

import {
    getAllBands,
    createBand,
    getOneBand
} from "../controllers/bands.js"

const bandRouter = Router()

bandRouter
    .route("/")
    .get(getAllBands)
    .post(createBand)

bandRouter
    .route("/:id")
    .get(getOneBand)

export default bandRouter