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
        likes: {
            type: Number,
            default: 0
        },
        // parentShow: {
        //     type: mongoose.Types.ObjectId,
        //     ref: 'Show',
        //     require: true
        // },
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