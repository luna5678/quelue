const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'username required']
        },
        dob: {
            type: Date,
            required: [true, 'DOB required']
        },
        email: {
            type: String,
            required: [true, 'email required']
        },
        password: {
            type: String,
            required: [true, 'password required']
        },
        showQueue: [{
            type: mongoose.Types.ObjectId,
            ref: 'Show',
            default: []
        }],
        episodeLikes: [{
            type: mongoose.Types.ObjectId,
            ref: 'Episode',
            default: []
        }]     
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;