import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()

import connectToDatabase from "./models/index.js";

const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(cors())


connectToDatabase().then((err) => {
    if(err){
        return console.log(err)
    }
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
