module.exports = (sequelize, Sequelize) => {
    const Roles = sequelize.define("roles", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          
        },
        
       RoleName: {
          type: Sequelize.STRING,
        }
      });
    return Roles;
}

