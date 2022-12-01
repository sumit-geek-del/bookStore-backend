module.exports = (sequelize , DataTypes)=>{
    const user = sequelize.define('users', {
        id: {
          type:DataTypes.BIGINT.UNSIGNED,
          allowNull: false,

          autoIncrement:true,
          primaryKey:true
        },
        name: {
          type: DataTypes.STRING,
          allowNull:false,
          defaultValue:false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull:true,
          defaultValue:null,
        },
  
        password: {
          type: DataTypes.STRING,
          allowNull:true,
          defaultValue:null,
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
      return user;
}