import mongoose, { Schema } from 'mongoose';

const JamSessionSchema = new mongoose.Schema(
    {
        name: {required: true, type: String},
        createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
        members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        genres: [{type: String, unique: true}],
        description: {required: false, type: String},
        experience: {required:true, type:String, enum : ['beginner', 'intermediate', 'advanced'], default: 'user'},
        instruments: [{required: true, type: String}],

    }
)

const JamSession  = mongoose.model('JamSession', JamSessionSchema);
export default JamSession;