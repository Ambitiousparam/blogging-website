import {connect} from "mongoose";
export const connectToDatabase = async() =>{
    try{
        await connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.k4xswam.mongodb.net/?retryWrites=true&w=majority`)
    } catch(err){
        console.log(err);
        return err;

        
    }
}