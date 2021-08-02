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
                    showQueue: '61079724934cbd28d3724cba' // hardcoded for now
                },
                {
                    username: 'Luna5678',
                    dob: new Date(2021, 0, 1),
                    email: 'thisislonna@gmail.com',
                    password: 'thisAlsoWorks',
                    showQueue: '61079724934cbd28d3724cbb' // hardcoded for now
                },
            ]);
            console.log(newUsers);
    } catch (error) {
        console.log(error);
    }
};

seed();