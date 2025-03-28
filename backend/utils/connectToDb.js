import mongoose from "mongoose";
import "dotenv/config"

const connectToDb = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName : "bookStore"
    }).then(()=> console.log("MongoDb Connected"))
    .catch(err => console.log(err.message))
}

export default connectToDb;