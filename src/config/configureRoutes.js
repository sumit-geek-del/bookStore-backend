import { booksRouter } from "../routes/books/booksRoutes";
import { loginRouter } from "../routes/login"
import { signUpRouter } from "../routes/signUp"

export const configureRoutes = (app) =>{
    app.use('/login', loginRouter);
    app.use('/signUp', signUpRouter);
    app.use('/books', booksRouter)
}