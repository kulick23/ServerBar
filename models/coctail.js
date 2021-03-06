module.exports = (sequelize, Sequelize) => {
  const Coctail = sequelize.define("coctail", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      ProductName: {
        type: Sequelize.STRING,
        unique: true,
      },
      Price: {
        type: Sequelize.DOUBLE,
      },
      Image: {            
        type: Sequelize.STRING,
        unique: true,
      },
      Volume: {
        type: Sequelize.DOUBLE,
      },
    });
  return Coctail;
}