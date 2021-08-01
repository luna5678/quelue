const { Show } = require('../models');


Show.deleteMany({}, function (error, deletedShows) {
    if (error) console.log(error);

    Show.insertMany(
        [
            {
                name: 'The Fresh Prince of Bel-Air',
                likes: 0,
                image: 'https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2017/08/rehost_2f2016_2f9_2f13_2f1b5cb41f-6c9f-4862-ae3a-107fd32008ab_1_.jpg?itok=3V2At_67',
                description: 'Teenage Will moves from the tough streets of West Philadelphia to a posh mansion in Bel-Air, California.'
            },
            {
                name: 'Modern Family',
                likes: 0,
                image: 'http://basementrejects.com/wp-content/uploads/2013/02/modern-family-season-1-title-card-review-episode-guide-list.jpg',
                description: 'Three different but related families face trials and tribulations in their own uniquely comedic ways.'
            },
            {
                name: `Bob's Burgers`,
                likes: 0,
                image: 'https://images-na.ssl-images-amazon.com/images/I/81aJs1k4R8L._RI_.jpg',
                description: 'Bob Belcher runs his dream restaurant with his wife and three children as their last hope of holding the family together.'
            }
        ],
        function (error, createdShows) {
            if (error) {
                return console.log(error);
            }
            console.log('Shows seed db complete!');
            console.log(createdShows);
        }
    );
});