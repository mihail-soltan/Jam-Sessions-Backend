import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import multer  from 'multer';
import cors from 'cors';
import connectToDatabase from "./models/index.js";
import usersRouter from './routes/users.js';
import jamSessionRouter from './routes/jamSessions.js';
import bandRouter from './routes/bands.js';
import ConversationRouter from './routes/conversations.js';
import MessageRouter from './routes/messages.js';
import GenreRouter from './routes/genres.js';
import colors from 'colors';
const app = express()
const upload = multer({ dest: 'uploads/' })

const PORT = process.env.PORT || 8080;
app.use(express.json())
app.use(cors())
app.get("/", (req, res)=> {
    res.send("Hello World")
})


app.use("/api/users", usersRouter)

app.use("/jamsessions", jamSessionRouter)

app.use("/bands", bandRouter)

app.use("/conversations", ConversationRouter)

app.use("/messages", MessageRouter)

app.use("/genres", GenreRouter)

connectToDatabase().then((err) => {
    if(err){
        return console.log(err)
    }
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`.trap.rainbow)
    })
})
