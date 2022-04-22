module.exports = (sequelize, Sequelize) => {
    const Places = sequelize.define("places", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        NumberOfPlace: {
          type: Sequelize.INTEGER,
          unique: true,
        },
        
        NumberOfSeats: {
          type: Sequelize.INTEGER,
        },
        Reserved: {
          type: Sequelize.BOOLEAN,
        }
      });
    return Places;
}

