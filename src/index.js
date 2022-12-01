
import express from 'express';
import {dbConnection }from './database/dbConnection'
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'
import helmet from 'helmet';
import {configureRoutes} from './config/configureRoutes';
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


configureRoutes(app);



app.get('/', (req, res)=>{
    res.send(`<h1>Hello From the Book Store Backend 💖</h1>`)
})


// Error Handling

app.use((req, res)=>{
    const error = new Error("Route Not Found");
    return res.status(400).json({error:error.message});
})

process.on('uncaughtException', (err)=>{
    console.log(err);
})
app.listen(PORT, ()=>{
    console.log(`Server is listening on the port ${PORT} 🌩️`)
})