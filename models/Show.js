const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        likes: {
            type: Number,
            default: 0
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        userQueue: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    },
    {
        timestamps: true
    }
);

const Show = mongoose.model('Show', ShowSchema);

module.exports = Show;