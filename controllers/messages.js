import Message from '../models/message.js'

export async function getAllMessages(request, response){
    try {
        const result = await Message.find().populate("owner_id").populate("group_id")
        response.json(result)
    } catch(err) {
        response.status(500).json({message: error.message})
    }
}

export async function getMessagesByOwnerId(request, response) {
    try {
        Message.find(request.params).populate("owner_id").populate("group_id")
        .then(messagesFound => {
            if(!messagesFound){
                return response.status(404).end()
            } return response.status(200).json(messagesFound)
        })
        console.log(request.params)
    } catch(error){
        response.status(500).json({ message: error.message})
    }
}

export async function createMessage(request, response) {
    try {
        const newMessage = await Message.create(request.body);
        response.json(newMessage)
    } catch(error) {
        response.status(400).json({ message: error.message})
    }
}

export async function deleteMessage(request, response) {
    try {
        const deletedMessage = await Message.deleteOne({id: request.params.id});
        response.json(deletedMessage)
        console.log(request.params.id)
    } catch(error) {
        response.status(400).json({ message: error.message})
    }
}