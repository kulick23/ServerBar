module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        Time: {
          type: Sequelize.TIME,
        },
        Comments: {
          type: Sequelize.STRING,
        },
        PhoneNumber: {
          type: Sequelize.STRING,
        },
        Date: {
          type: Sequelize.DATE,
        }
      });
    return Order;
}

