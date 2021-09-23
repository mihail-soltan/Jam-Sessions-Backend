import User from '../models/user.js'

export async function getAllUsers(request, response){
    try {
        const result = await User.find()
        response.json(result)
    } catch(err) {
        response.status(500).json({message: error.message})
    }
}

export async function getOneByUserName(request, response) {
    try {
        User.findOne(request.params)
        .then(userFound => {
            if(!userFound){
                return response.status(404).end()
            } return response.status(200).json(userFound)
        })
        // console.log(request.params)
    } catch(error){
        response.status(500).json({ message: error.message})
    }
}

export async function createUser(request, response) {
    try {
        const newUser = await User.create(request.body);
        response.json(newUser)
    } catch(error) {
        response.status(400).json({ message: error.message})
    }
}