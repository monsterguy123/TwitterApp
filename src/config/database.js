import mongoose from 'mongoose';

export const connect = async() => {
    mongoose.set('strictQuery', false)
    await mongoose.connect('mongodb+srv://Deepak:Deepak123@deepak.lh7uonr.mongodb.net/?retryWrites=true&w=majority');
}