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
        showQueue: {
            type: [mongoose.Shows.ObjectId],
            ref: 'Show',
            default: []
        },
        showLikes: [{
            type: mongoose.Shows.ObjectId,
            ref: 'Show',
        }],
        episodeLikes: [{
            type: mongoose.Episodes.ObjectId,
            ref: 'Episode'
        }]     
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;