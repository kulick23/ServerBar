module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        User: {
          type: Sequelize.INTEGER,
        },
        Time: {
          type: Sequelize.TIME,
        },
        Place: {
          type: Sequelize.INTEGER,
        },
        Comments: {
          type: Sequelize.STRING,
        },
        PhoneNumber: {
          type: Sequelize.STRING,
        },
        Date: {
          type: Sequelize.DATE,
        },
        Discont_id: {
          type: Sequelize.INTEGER,
        },
       Party_id: {
          type: Sequelize.INTEGER,
        },
        Order_id: {
            type: Sequelize.INTEGER,
        }
      });
    return Order;
}

