const mongoose = require('mongoose');

(async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Connected to MongoDB database");
        
    } catch (error) {
        console.log(error.message);
    }
})();