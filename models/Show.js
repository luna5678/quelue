const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

const Show = mongoose.model('Show', ShowSchema);

module.exports = Show;