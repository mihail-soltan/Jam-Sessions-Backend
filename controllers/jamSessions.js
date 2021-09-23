import JamSession from '../models/jamSession.js'

export async function getAllSessions(request, response){
    try {
        const result = await JamSession.find().populate("createdBy").populate("members")
        response.json(result)
    } catch(err) {
        response.status(500).json({message: error.message})
    }
}

export async function getOneSession(request, response){
    try {
        JamSession.findById(request.params.id).populate("createdBy").populate("members")
        .then(sessionFound => {
            if(!sessionFound){
                return response.status(404).end()
            } return response.status(200).json(sessionFound)
        })
        // console.log(request.params.id)
    } catch(error){
        response.status(500).json({ message: error.message})
    }
}

export async function createJamSession(request, response) {
    try {
        const newSession = await JamSession.create(request.body);
        response.json(newSession)
    } catch(error) {
        response.status(400).json({ message: error.message})
    }
}