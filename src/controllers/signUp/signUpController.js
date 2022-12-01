import express from 'express';
import {dbConnection} from '../../database/dbConnection';
import ErrorCodes from '../../Constants/errorCodes'
const app = express();
const users = dbConnection.users;

const signupController = app.post('/', async (req, res)=>{

    const {name, email, password} = req.body;
    if(!email){
        return res.send(401).json(ErrorCodes.emailRequired);
    }
    if(!password){
        return res.send(401).json(ErrorCodes.passwordRequired);
    }
    if(!name){
        return res.send(401).json(ErrorCodes.nameIsRequired);
    }

    

    if(email && password && name){
        try{
            const userResult = await users.create({
                name:name,
                email:email,
                password:password
            })

            if(userResult){
                return res.status(201).json(ErrorCodes.userCreated)
            }
        }catch(err){
            return res.status(500).json(ErrorCodes.internalServerError);
        }
        
    }
})

export {signupController}