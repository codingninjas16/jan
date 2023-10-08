
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    section: {
        type: String,
        enum: ['X', 'Y', 'Z']
    },
    teacher_name: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);
// users
const classModel = mongoose.model('class', classSchema);

module.exports = classModel;