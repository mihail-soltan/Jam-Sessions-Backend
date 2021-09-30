import mongoose from 'mongoose';

const JamSessionSchema = new mongoose.Schema(
    {
        name: {required: true, type: String},
        city: {required: true, type: String},
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        genres: [{type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}],
        description: {required: false, type: String},
        experience: {required:true, type:String, enum : ['beginner', 'intermediate', 'advanced'], default: 'intermediate'},
        instruments: [{required: true, type: String}],
        date: {required: true, type: Date}
    }
)

const JamSession  = mongoose.model('jamsession', JamSessionSchema);
export default JamSession;