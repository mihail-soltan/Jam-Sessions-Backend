import Band from '../models/band.js'

export async function getAllBands(request, response){
    try {
        const result = await Band.find().populate("createdBy").populate("members")
        response.json(result)
    } catch(err) {
        response.status(500).json({message: error.message})
    }
}

export async function getOneBand(request, response){
    try {
        Band.findById(request.params.id).populate("createdBy").populate("members")
        .then(bandFound => {
            if(!bandFound){
                return response.status(404).end()
            } return response.status(200).json(bandFound)
        })
        // console.log(request.params.id)
    } catch(error){
        response.status(500).json({ message: error.message})
    }
}

export async function createBand(request, response) {
    try {
        const newSession = await Band.create(request.body);
        response.json(newSession)
    } catch(error) {
        response.status(400).json({ message: error.message})
    }
}