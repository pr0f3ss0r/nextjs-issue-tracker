import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URL!;

const  connect = async ()=>{

    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Successfully Connected to DB');
               
    } catch (error) {
        console.log(error+'cannot connect to db');
        
    }
}

export default connect;