const mongoose = require('mongoose');
const connectDB = require('./database')
const user = require('../app/models/userModel')
const passwordHandler = require('./passwordHandler')

connectDB();

const seedUser = async () => {
    try {
        // Check if the user already exists
        const existingUser = await user.findOne({ username: 'kane' });

        if (!existingUser) {
            // Create a new user using the provided data
            const newUser = new user({
                username: 'kane',
                password: await passwordHandler.encryptPassword('adminkane'),
                name: 'Kane Thor',
                age: 35,
                gender: 'male',
                email: 'kanethor@mail.com',
                role: 'admin',
                verified: true,
                img: '/image/default_user_icon.png',
            });

            // Save the user to the database
            await newUser.save();

            console.log('admin seed successful');
        } else {
            console.log('User already exists, skipping seed');
        }
    } catch (error) {
        console.error('Error seeding user:', error);
    } finally {
        // Close the database connection
        mongoose.connection.close();
    }
};

// Run the seed function
seedUser();