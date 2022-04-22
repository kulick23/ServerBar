const Sequelize = require("sequelize");
const sequelize = new Sequelize("ServerBar", "server", "bar", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./user')(sequelize, Sequelize);
module.exports = db;