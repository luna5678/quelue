const { Episode } = require("../models");

Episode.deleteMany({}, function(error, deletedEpisodes) {
    if (error) return console.log(error);

    Episode.insertMany(
        [
            {
                name: 'The Fresh Prince Project',
                runtime: 22,
                likes: 0,
                parentShow: '61082b4c699d2a3eeb21cf0c',
                image: 'https://m.media-amazon.com/images/M/MV5BMzI1OTUzMjkxM15BMl5BanBnXkFtZTgwNjA4MDIyMjE@._V1_.jpg',
                description: 'Will Smith is transplanted from the tough streets of Philadelphia to live with his wealthy relatives in Bel Air, causing everyone to make major adjustments in their way of living and in their their way of thinking.'
            },
            {
                name: 'Pilot',
                runtime: 23,
                likes: 0,
                parentShow: '61082b4c699d2a3eeb21cf0d',
                image: 'https://www.pogdesign.co.uk/cat/imgs/episodes/Modern-Family/Modern-Family-S01E01-da5b17414ddc34e315e306c80399d568-full.jpg',
                description: 'Jay has grown children, grandchildren and a gorgeous young wife, who has a preteen son of her own; all together they must bridge generational, cultural and social gaps.'
            },
            {
                name: 'Human Flesh',
                runtime: 30,
                likes: 0,
                parentShow: '61082b4c699d2a3eeb21cf0e',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Human_Flesh_-_Bob%27s_Burgers_promo.png/275px-Human_Flesh_-_Bob%27s_Burgers_promo.png',
                description: `A health inspector visits the burger joint after Louise starts a rumor at school during show-and-tell in the opener of the animated sitcom series following a restaurateur and his quirky family.`,
            }
        ],
        function (error, createdEpisodes) {
            if (error) {
                return console.log(error);
            }
            console.log('Shows seed db complete!');
            console.log(createdEpisodes);
        }
)
});