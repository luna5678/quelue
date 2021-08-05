const mongoose = require('mongoose');

const EpisodeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        runtime: {
            type: Number,
            required: true
        },
        parentShow: {
            type: mongoose.Types.ObjectId,
            ref: 'Show',
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Episode = mongoose.model('Episode', EpisodeSchema);

module.exports = Episode;