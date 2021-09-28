// group id, owner id, Genre content
import mongoose from 'mongoose';

const GenreSchema = new mongoose.Schema(
    {
        label: {type: String, required: true, unique: true},
        value: {type: String, required: true},
    }
)

const Genre  = mongoose.model('Genre', GenreSchema);
export default Genre;