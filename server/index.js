import express from 'express';
import * as dotenv from 'dotenv';
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from './routes/User.js'; 

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080

app.use(cors());
app.use(express.json({ limit: '50mb'}));
app.use(express.urlencoded({extended: true}));
// the lasst two you dont need to use if you are using body-parser which I have seen in the codeacademy course. 

app.use('/api/user', UserRoutes);

// error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Oh dear, it went wrong... so verry wrong";
    return res.status(status). json({
        success: false, 
        status, 
        message,
    });
});

app.get('/', async(req, res, next) => {
    res.status(200).json({
        message: "Hello Kiernan - you server seems to be working today",
    }).then((res) => console.log(res));

});

const connectDB = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGODB_URL)
    .then((res) => console.log("You are connected to your databse"))
    .catch((err) => console.log(err));
};

// this is how we were shown to start a server in Code Academy, but matey did it differently.
// app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`);
// })
// below is how matey set up is server.
const startServer = async() => {
    try{
        connectDB()
        app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
    }catch(err) {
        console.log(err);
    }
}

startServer();