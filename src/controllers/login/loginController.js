import express from 'express';
import {dbConnection} from '../../database/dbConnection';
import ErrorCodes from '../../Constants/errorCodes'
const app = express();
const users = dbConnection.users;

const loginController = app.post('/', async (req, res)=>{

    const {email, password} = req.body;
    if(!email){
        return res.send(401).json(ErrorCodes.emailRequired);
    }
    if(!password){
        return res.send(401).json(ErrorCodes.passwordRequired);
    }

    if(email && password){
        try{
            const userResult = await users.findAll({
                raw:true
            })

            if(userResult.length>0){
                return res.status(200).json(ErrorCodes.loginSuccess)
            }
            else{
                return res.status(300).json(ErrorCodes.userNotFound);
            }
        }catch(err){
            return res.status(500).json(ErrorCodes.internalServerError);
        }
        
    }
})

export {loginController}