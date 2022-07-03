module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        Name: {
          type: Sequelize.STRING,
        },
        Login: {
          type: Sequelize.STRING,
          unique: true,
        },
        Password: {
          type: Sequelize.STRING,
        },
        PhoneNumber: {
          type: Sequelize.STRING,
        }
      });

    return User;
}

