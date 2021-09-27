import Genre from '../models/genre.js'

export async function getAllGenres(request, response){
    try {
        const result = await Genre.find()
        response.json(result)
    } catch(err) {
        response.status(500).json({message: error.message})
    }
}


export async function addGenre(request, response) {
    try {
        const newGenre = await Genre.create(request.body);
        response.json(newGenre)
    } catch(error) {
        response.status(400).json({ message: error.message})
    }
}

export async function getOneGenre(request, response) {
    try {
        Genre.findById(request.params.id)
        .then(genresFound => {
            if(!genresFound){
                return response.status(404).end()
            } return response.status(200).json(genresFound)
        })
        console.log(request.params)
    } catch(error){
        response.status(500).json({ message: error.message})
    }
}