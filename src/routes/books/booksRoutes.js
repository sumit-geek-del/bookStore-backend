import express from 'express';
import {booksController} from '../../controllers/books/booksController'
const router = express.Router();

router.use('/', booksController.addBooksController);
router.use('/getBooks', booksController.getBooksController);
router.use('/updateBooks', booksController.updateBooksController);
router.use('/deleteBooks', booksController.deleteBooksController);
export {router as booksRouter}