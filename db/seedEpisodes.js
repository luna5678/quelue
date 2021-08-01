const Episode = require("../models");

Episode.deleteMany({}, function(error, deletedEpisodes) {
    if (error) return console.log(error);

    Episode.insertMany(
        [
            {
            name: 'The Fresh Prince Project',
            runtime: 1000 * 22,
            likes: 0,
            parentShow: 'Parent Show ID from DB',
            image: 'https://m.media-amazon.com/images/M/MV5BMzI1OTUzMjkxM15BMl5BanBnXkFtZTgwNjA4MDIyMjE@._V1_.jpg',
            description: 'Will Smith is transplanted from the tough streets of Philadelphia to live with his wealthy relatives in Bel Air, causing everyone to make major adjustments in their way of living and in their their way of thinking.'
    }])
});