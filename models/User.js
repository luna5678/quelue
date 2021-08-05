const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'username required'],
            unique: true
        },
        dob: {
            type: Date,
            required: [true, 'DOB required']
        },
        email: {
            type: String,
            required: [true, 'email required'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'password required']
        },
        showQueue: [{
            type: mongoose.Types.ObjectId,
            ref: 'Show',
            default: []
        }]
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;