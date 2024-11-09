import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://deveshpanwer9990:devesh123@cluster0.ku78h.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}