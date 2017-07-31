module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  });

  return User;
}