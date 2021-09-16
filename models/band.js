import mongoose, { Schema } from 'mongoose';

const BandSchema = new mongoose.Schema(
    {
        name: {required: true, type: String},
        createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
        members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        genres: [{type: String, unique: true}],
        description: {required: false, type: String}
    }
)

const Band  = mongoose.model('Band', BandSchema);
export default Band;