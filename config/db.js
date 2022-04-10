let mongoose = require('mongoose')
let config = require('config')
let db = config.get('mongoURI')
let connectDB = async () => {
    try {
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Mongodb connected sucessfully');
    } catch (error) {
        console.log(error);

    }
}


module.exports = connectDB