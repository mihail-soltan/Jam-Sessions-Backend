import mongoose from 'mongoose';

const BandSchema = new mongoose.Schema(
    {
        name: {required: true, type: String},
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        genres: [{type: String, unique: false}],
        description: {required: false, type: String}
    }
)

const Band  = mongoose.model('Band', BandSchema);
export default Band;