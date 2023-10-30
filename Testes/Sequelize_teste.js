const sequelize = require('sequelize');
//var mysql = require('mysql');

// Connect to the database
sequelize.connect()
sequelize.connect('sequelize_teste', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

// Define the User model
const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Create 3 mock users
(async () => {
  await sequelize.sync({ force: true });

  const users = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      age: 25,
      email: 'jane.doe@example.com',
    },
    {
      firstName: 'Peter',
      lastName: 'Parker',
      age: 20,
      email: 'peter.parker@example.com',
    },
  ];

  await Promise.all(users.map(async (user) => {
    await User.create(user);
  }));
})();
