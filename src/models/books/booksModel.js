module.exports = (sequelize , DataTypes)=>{
    const books = sequelize.define('books', {
        id: {
          type:DataTypes.BIGINT.UNSIGNED,
          allowNull: false,
          autoIncrement:true,
          primaryKey:true
        },
        book_name: {
          type: DataTypes.STRING,
          allowNull:false,
          defaultValue:false,
        },
        book_language: {
          type: DataTypes.STRING,
          allowNull:true,
          defaultValue:null,
        },
  
        book_author: {
          type: DataTypes.STRING,
          allowNull:true,
          defaultValue:null,
        },
        book_category:{
            type:DataTypes.STRING,
            allowNull:true,
            defaultValue:null
        },
        created_at:{
        type:DataTypes.TIME,
        allowNull:false,
        defaultValue:DataTypes.NOW
        },
      }, {
          reezeTableName: true,
          timestamps:false,
      });
      return books;
}