const logger = require("../utils/Logger");
const { Sequelize } = require("sequelize");

const DB = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    logging: logger.debug.bind(logger),
    // operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    timezone: "+00:00",
  }
);

const connect_db = async () => {
  try {
    await DB.authenticate();
    console.log(
      "=================> Base de données connectée ! <================="
    );
    return DB;
  } catch (error) {
    logger.error(
      "=================> Erreur lors de la connexion à la base de données <=================\n",
      error
    );
    process.exit(1);
  }
};

DB.sync();


module.exports = {
  DB,
  connect_db,
};
