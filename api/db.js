const mongoose = require('mongoose');

(async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB database");
        
    } catch (error) {
        console.log(error.message);
    }
})();