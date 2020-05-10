const Sequelize = require('sequelize');

const sequelize = new Sequelize('demo_database', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const Company = sequelize.define(
  'employee',
  {
    id: {
      type: Sequelize.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.insertCompanyDetails = (params) => {
  const { firstName, lastName, email, address, phone } = params;
  return Company.create({
    firstName,
    lastName,
    email,
    address,
    phone,
  });
};

module.exports.queryCompanyDetails = (params) => {
  return Company.findAll({});
};
