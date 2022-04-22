module.exports = (sequelize, Sequelize) => {
  const Party = sequelize.define("party ", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
  Name:{
    type: Sequelize.STRING,
  },
  Description:{
     type: Sequelize.STRING,
  },
  Date: {
  type: Sequelize.DATE,
  },
  Time:{
    type: Sequelize.TIME,
  },
  Image:{
     type: Sequelize.STRING,
  unique: true,
  }
});
  return Party;
}
