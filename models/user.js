import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const UserSchema = new mongoose.Schema(
    {
        firstName: {required: true, type: String},
        lastName: {required: true, type: String},
        userName: {type: String,
            required: [true, 'Please add a name'],
            maxlength: [50, 'Only max 50 chars are allowed for the name'],
            unique: true
        },
        phone: {
            required: false,
            type:String, 
            validate: {
                validator: async function(phone) {
                    const user = await this.constructor.findOne({ phone });
                    if(user) {
                        if(this.id === user.id) {
                            return true;
                        }
                        return false;
                    }
                    return true;
                },
                message: props => 'The specified phone number is already associated with an account.'
            }
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
            match: [
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              'Please add a valid email',
            ]            
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
            minlength: 8,
            select: false
        },
        primaryContact: {index: true, required:true, type:String, enum : ['phone', 'email'], default: 'email'},
        phoneConfirmed: {index: true, required:true, type:Boolean, default: false},
        emailConfirmed: {index: true, required:true, type:Boolean, default: false},
        avatar: {type: String, default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"},
        wantsSpam: {type: Boolean, default: false},
        isOnline: {type: Boolean, required: false, default: false},
        isDeleted: {type: Boolean, required: true, default: false},
        role: {index: true, required:true, type:String, enum : ['user', 'admin'], default: 'user'},
        experience: {required:true, type:String, enum : ['beginner', 'intermediate', 'advanced'], default: 'user'},
        instruments: [{required: true, type: Object}],
    },  { timestamps: true }
)
UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  
  UserSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET)
  }
  
  // math user entered password ot hashed password in db
  UserSchema.methods.matchPassword = async function(enteredPass) {
    return await bcrypt.compare(enteredPass, this.password)
  }

const User = mongoose.model("User", UserSchema);
export default User;