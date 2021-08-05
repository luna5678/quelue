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
                name: 'Bang the Drum, Ashley',
                runtime: 24,
                likes: 0,
                parentShow: '61082b4c699d2a3eeb21cf0c',
                image: 'https://ichef.bbci.co.uk/images/ic/1200x675/p08z9xgn.jpg',
                description: 'After Ashley reveals to him that she does not enjoy playing the violin he takes her to and trades her violin in for a drum set. Then reveals that he has already hired Ashley a teacher. Jazz.'
            },
            {
                name: 'Clubba Hubba',
                runtime: 22,
                likes: 0,
                parentShow: '61082b4c699d2a3eeb21cf0c',
                image: 'https://m.media-amazon.com/images/M/MV5BMTQ5MTAwODM0NV5BMl5BanBnXkFtZTgwNzQ0MTIyMjE@._V1_.jpg',
                description: "Will tries to impress a girl's father so he can date her. Mr. Banks, Carlton, and Geoffrey try to teach him how to be a gentleman in a My Fair Lady way."
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
                name: 'The Bicycle Thief',
                runtime: 30,
                likes: 0,
                parentShow: '61082b4c699d2a3eeb21cf0d',
                image: 'https://m.media-amazon.com/images/M/MV5BMTcwOTI2OTc0OF5BMl5BanBnXkFtZTgwNzYxODQ2MjE@._V1_.jpg',
                description: 'After buying a new bike for his son, Phil ends up lying when it gets stolen. Jay tries bonding with Manny. Cam and Mitchell begin daycare classes for Lily.'
            },
            {
                name: 'Come Fly with Me',
                runtime: 21,
                likes: 0,
                parentShow: '61082b4c699d2a3eeb21cf0d',
                image: 'http://3.bp.blogspot.com/_0KRN69leV-Q/Ss1QbCmD4DI/AAAAAAAAG7U/sQxPnCM0MpI/s400/modern-family-fly-with-me.jpg',
                description: 'Jay takes Phil on a model-airplane excursion with disastrous results. While Manny is at their house, Claire must get used to the fact they are actually siblings.'
            },
            {
                name: 'Human Flesh',
                runtime: 30,
                likes: 0,
                parentShow: '61082b4c699d2a3eeb21cf0e',
                image: 'http://basementrejects.com/wp-content/uploads/2016/04/bobs-burgers-season-1-1-human-flesh-first-episode-cannibals-review-episode-guide-list.jpg',
                description: `A health inspector visits the burger joint after Louise starts a rumor at school during show-and-tell in the opener of the animated sitcom series following a restaurateur and his quirky family.`,
            },
            {
                name: 'Crawl Space',
                runtime: 30,
                likes: 0,
                parentShow: '61082b4c699d2a3eeb21cf0e',
                image: 'https://resizing.flixster.com/ir9kyyWXQvp9oIxztU2zXvNEG_4=/fit-in/1152x864/v1.bjsxNTE3MDk0O2o7MTg5MTc7MTIwMDsyNDAwOzEzNTA',
                description: 'His in-laws are coming into town, and Bob tries desperately to concoct a plan to avoid them for as long as he can. Unfortunately, Bob did not plan to get stuck in the recesses of the family restaurant.'
            },
            {
                name: 'Sacred Cow',
                runtime: 22,
                likes: 0,
                parentShow: '61082b4c699d2a3eeb21cf0e',
                image: 'https://m.media-amazon.com/images/M/MV5BMTc4NzkyNTE4NV5BMl5BanBnXkFtZTgwOTI5OTg0MjE@._V1_.jpg',
                description: 'A filmmaker placed a cow outside the restaurant to make a statement, which angers Bob, but his family is confused over how he treats the cow.'
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