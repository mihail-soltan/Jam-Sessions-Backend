import Conversation from '../models/conversation.js'

export async function getAllConversations(request, response){
    try {
        const result = await Conversation.find().populate("createdBy").populate("participants")
        response.json(result)
    } catch(err) {
        response.status(500).json({message: error.message})
    }
}

export async function getOneConversation(request, response){
    try {
        Conversation.findById(request.params.id).populate("createdBy").populate("participants")
        .then(ConversationFound => {
            if(!ConversationFound){
                return response.status(404).end()
            } return response.status(200).json(ConversationFound)
        })
        // console.log(request.params.id)
    } catch(error){
        response.status(500).json({ message: error.message})
    }
}

export async function createConversation(request, response) {
    try {
        const newConversation = await Conversation.create(request.body);
        response.json(newConversation)
    } catch(error) {
        response.status(400).json({ message: error.message})
    }
}

export async function deleteConversation(request, response) {
    try {
        const deletedConversation = await Conversation.deleteOne({id: request.params.id});
        response.json(deletedConversation)
        console.log(request.params.id)
    } catch(error) {
        response.status(400).json({ message: error.message})
    }
}