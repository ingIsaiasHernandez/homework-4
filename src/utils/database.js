const {Sequelize} = require('sequelize');
const db = new Sequelize({
    database: "chat_db",
    host: "localhost",
    port: 5432,
    username: 'postgres',
    password: "root",
    dialect: 'postgres',
    logging: false
});

module.exports = db;