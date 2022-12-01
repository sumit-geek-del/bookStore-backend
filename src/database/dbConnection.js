import {Sequelize, DataTypes} from 'sequelize'

const sequelize = new Sequelize('bookstore', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging:false
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

db.users = require('../models/Users/usersModel')(sequelize, DataTypes);
db.books = require("../models/books/booksModel")(sequelize, DataTypes);
  
db.sequelize.sync();
console.log("All models were synchronized successfully.");


export {db as dbConnection}