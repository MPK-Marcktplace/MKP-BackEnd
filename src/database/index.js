const { sequelize, DataTypes } = require('./config/sequelize');

const db = {
  departmentModel: require('./models/Department')(sequelize, DataTypes),
  partnerModel: require('./models/Partner')(sequelize, DataTypes),
  productModel: require('./models/Product')(sequelize, DataTypes),
  requestModel: require('./models/Request')(sequelize, DataTypes),
  userModel: require('./models/User')(sequelize, DataTypes),
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;