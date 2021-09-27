import Router from 'express';

import {
    getAllGenres,
    addGenre,
    getOneGenre
} from "../controllers/genres.js"

const GenreRouter = Router()

GenreRouter
    .route("/")
    .get(getAllGenres)
    .post(addGenre)
    
GenreRouter
    .route("/:id")
    .get(getOneGenre)

export default GenreRouter