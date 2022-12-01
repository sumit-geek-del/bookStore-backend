import express from 'express'
import { dbConnection } from '../../database/dbConnection';
import ErrorCodes from '../../Constants/errorCodes';

const app = express();

const books = dbConnection.books;

const addBooksController = app.post('/', async (req, res)=>{
    const {bookName, bookCategory, bookLanguage, bookAuthor} = req.body;

    if(!bookName){
        return res.status(401).json(`${bookName} ${ErrorCodes.isRequired}`);
    }

    if(!bookCategory){
        return res.status(401).json(`${bookName} ${ErrorCodes.isRequired}`);
    }

    if(!bookLanguage){
        return res.status(401).json(`${bookName} ${ErrorCodes.isRequired}`);
    }

    if(!bookAuthor){
        return res.status(401).json(`${bookName} ${ErrorCodes.isRequired}`);
    }

    

    if(bookName && bookCategory && bookLanguage && bookAuthor){

        try{

            const addBook = await books.create({
                book_name:bookName,
                book_language:bookLanguage,
                book_author:bookAuthor,
                book_category:bookCategory
            })
    
            if(addBook){
                return res.status(201).json(ErrorCodes.bookAdded)
            }
        }catch(err){
            return res.status(500).json(ErrorCodes.internalServerError);
        }
    }

    
})

const getBooksController = app.get('/getBooks', async (req, res)=>{


    const {bookName} = req.query;
    if(bookName){
        console.log("i am heer")
        try{
            const booksByFilter = await books.findAll({
                where:{
                    book_name:bookName
                },
                raw:true
            })
    
            if(booksByFilter){
                return res.status(200).json({data:booksByFilter})
            }
            
        }catch(err){
            return res.status(500).json(ErrorCodes.internalServerError);
        }
        
        
    }

    if(!bookName){
        try{
            const booksWithoutFilter = await books.findAll({raw:true});
            if(booksWithoutFilter){
                return res.status(200).json({data:booksWithoutFilter})
            }
        }
        catch(err){
            return res.status(500).json(ErrorCodes.internalServerError);
        }

    }
})

const updateBooksController = app.patch('/updateBooks', async (req, res)=>{
    const {bookName, bookLanguage, bookAuthor, bookCategory, bookId} = req.body;

    let updateDTO = {}

    if(!bookId){
        return res.status(401).json(ErrorCodes.bookIdRequired);
    }

    

    if((!bookName && !bookLanguage && !bookAuthor && !bookCategory)){
        return res.status(401).json({message:'Nothing to Update', code:"NOT-401"})
    }

    if(bookName){
        updateDTO = {
            book_name:bookName
        }
    }

    if(bookLanguage){
        updateDTO = {
            book_language:bookLanguage,
            ...updateDTO
        }
    }

    if(bookAuthor){
        updateDTO = {
            book_author:bookAuthor,
            ...updateDTO
        }
    }
    if(bookCategory){
        updateDTO = {
            book_category:bookCategory,
            ...updateDTO
        }
    }
    console.log(updateDTO);

    try{
        const updateBooksDetails = await books.update(updateDTO, {
            where:{
                id:bookId
            }
        })

        if(updateBooksDetails){
            return res.status(201).json(ErrorCodes.bookDetailsUpdated);
        }
    }catch(err){
        return res.status(500).json(ErrorCodes.internalServerError);
    }

    


})

const deleteBooksController = app.delete('/deleteBooks', async (req, res)=>{
    const {bookId} =req.query;

    if(!bookId){
        return res.status(401).json(ErrorCodes.bookIdRequired);
    }

    if(bookId){
        try{
            const deleteBook = await books.destroy({
                where:{
                    id:bookId
                }
            })

            if(deleteBook){
                return res.status(201).json(ErrorCodes.bookDeletedSuccessfully);
            }
        }
        catch(err){
            return res.status(500).json(ErrorCodes.internalServerError);
        }
    }

   
})


const booksController = {
    addBooksController:addBooksController,
    getBooksController:getBooksController,
    updateBooksController:updateBooksController,
    deleteBooksController:deleteBooksController
}

export {booksController}