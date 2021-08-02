const { User, Show } = require('../models');

const seed = async () => {
    try {
        await User.deleteMany();
        const newUsers = await User.insertMany(
            [
                {
                    username: 'LAsoul88',
                    dob: new Date(1988, 2, 2),
                    email: 'courtney.kakebeen@gmail.com',
                    password: 'thisWorks',
                    showQueue: '61082b4c699d2a3eeb21cf0c' // hardcoded for now
                },
                {
                    username: 'Luna5678',
                    dob: new Date(2021, 0, 1),
                    email: 'thisislonna@gmail.com',
                    password: 'thisAlsoWorks',
                    showQueue: '61082b4c699d2a3eeb21cf0d' // hardcoded for now
                },
            ]);
            console.log(newUsers);
    } catch (error) {
        console.log(error);
    }
};

seed();