import mongoose from "mongoose";   

let isConnected = false; // track connection to database

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "promptopia",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch(error) {
        console.log(error);
    }
}