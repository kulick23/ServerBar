module.exports = (sequelize, Sequelize) => {
    const Discount = sequelize.define("discount", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        
       Amount: {
          type: Sequelize.INTEGER,
        }
      });
    return Discount;
}

