module.exports = (sequelize, Sequelize) => {
    const Discount = sequelize.define("discount", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        
       Amount: {
          type: Sequelize.INTEGER,
        },
        Des1: {
          type: Sequelize.STRING,
        },
        Des2: {
          type: Sequelize.STRING,
        },
        Des3: {
          type: Sequelize.STRING,
        }
  
      });
    return Discount;
}

