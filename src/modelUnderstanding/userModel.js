// schema is like blue print
// user
//
// {
//     name: string
//     email:string
//     mobile_no:number
//     role:string
//   created_at:
// updated_at:

// }

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile_no: {
        type: Number,
        unique: true
    },
    role: {
        type: String,
        enum: ['A', 'S'],
        default: 'S'
    },
    address: String,
    class_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class'
    }
},
    {
        timestamps: true
    }
);
// users
const userModel = mongoose.model('user', UserSchema);

module.exports = userModel;