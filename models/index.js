const Category = require('./category');
const Profloss = require('./profloss');
const User = require('./user');
User.hasMany(Profloss);
Profloss.belongsTo(User,{foreignKey:'id'});
Profloss.belongsTo(Category,{foreignKey:'id'});
Category.hasMany(Profloss);

module.exports = {
  Category,Profloss,User
};