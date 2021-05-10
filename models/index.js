const Category = require('./category');
const Profloss = require('./profloss');
const User = require('./user');
User.hasMany(Profloss);
Profloss.belongsTo(User);
Profloss.belongsTo(Category);
Category.hasMany(Profloss);

module.exports = {
  Category,Profloss,User
};