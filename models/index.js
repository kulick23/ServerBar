const Sequelize = require("sequelize");
const sequelize = new Sequelize("server_bar", "root", "root", {
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
db.categories = require('./categories')(sequelize, Sequelize)
db.roles = require('./roles')(sequelize, Sequelize);
db.coctail = require('./coctail')(sequelize, Sequelize);
db.discount = require('./discount')(sequelize, Sequelize);
db.order = require('./order')(sequelize, Sequelize);
db.party = require('./party')(sequelize, Sequelize);
db.places = require('./places')(sequelize, Sequelize);
module.exports = db;

db.users.hasMany(db.order);
db.order.belongsTo(db.users);

db.users.belongsTo(db.roles);
db.roles.hasMany(db.users);

db.users.belongsTo(db.discount);
db.discount.hasOne(db.users);

db.order.belongsTo(db.discount);
db.discount.hasOne(db.order);

db.order.belongsTo(db.party);
db.party.hasOne(db.order);

db.order.belongsTo(db.places);
db.places.hasOne(db.order);

db.order.belongsTo(db.coctail);
db.coctail.hasMany(db.order);

db.categories.hasMany(db.coctail);
db.coctail.belongsTo(db.categories);

