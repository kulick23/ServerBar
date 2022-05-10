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
db.categories = require('./categories')(sequelize, Sequelize)
db.roles = require('./roles')(sequelize, Sequelize);
db.coctail = require('./coctail')(sequelize, Sequelize);
db.discount = require('./discount')(sequelize, Sequelize);
db.order = require('./order')(sequelize, Sequelize);
db.party = require('./party')(sequelize, Sequelize);
db.places = require('./places')(sequelize, Sequelize);
module.exports = db;
db.users.hasMany(db.order,{
  foreignKey: 'order_id',
  targetKey: 'id',
});

db.order.belongsTo(db.users,{
  foreignKey: 'order_id',
  targetKey: 'id',
});

db.users.hasOne(db.roles,{
  foreignKey: 'role',
  targetKey: 'id',
});

db.roles.belongsTo(db.users,{
  foreignKey: 'order_id',
  targetKey: 'id',
});

db.users.hasOne(db.discount,{
  foreignKey: 'Discount',
  targetKey: 'id',
});

db.discount.belongsTo(db.users,{
  foreignKey: 'order_id',
  targetKey: 'id',
});

db.order.hasOne(db.discount,{
  foreignKey: 'Discount_id',
  targetKey: 'id',
});

db.discount.belongsTo(db.order,{
  foreignKey: 'Discount_id',
  targetKey: 'id',
});

db.order.hasOne(db.party,{
  foreignKey: 'Party_id',
  targetKey: 'id',
});

db.party.belongsTo(db.order,{
  foreignKey: 'Party_id',
  targetKey: 'id',
});

db.order.hasOne(db.places,{
  foreignKey: 'Place',
  targetKey: 'id',
});

db.places.belongsTo(db.order,{
  foreignKey: 'Place',
  targetKey: 'id',
});

db.coctail.hasOne(db.categories,{
  foreignKey: 'Type',
  targetKey: 'id',
});

db.categories.belongsTo(db.coctail,{
  foreignKey: 'Type',
  targetKey: 'id',
});

db.order.hasMany(db.coctail,{
  foreignKey: 'coctail_id',
  targetKey: 'id',
});

db.coctail.belongsTo(db.order,{
  foreignKey: 'coctail_id',
  targetKey: 'id',
});

