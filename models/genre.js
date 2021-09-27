// group id, owner id, Genre content
import mongoose from 'mongoose';

const GenreSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        description: {type: String, required: false},
    }
)

const Genre  = mongoose.model('Genre', GenreSchema);
export default Genre;