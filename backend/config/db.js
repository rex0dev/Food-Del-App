import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('db-connection-link').then(()=>console.log("DB Connected"));
}
