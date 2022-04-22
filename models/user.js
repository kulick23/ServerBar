module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        Role: {
          type: Sequelize.INTEGER,
        },
        Name: {
          type: Sequelize.STRING,
        },
        Login: {
          type: Sequelize.STRING,
        },
        Password: {
          type: Sequelize.STRING,
        },
        PhoneNumber: {
          type: Sequelize.STRING,
        },
        Discont: {
          type: Sequelize.INTEGER,
        },
        Order_id: {
          type: Sequelize.INTEGER,
        }
      });
    return User;
}

