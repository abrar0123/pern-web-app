const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pern_auth',
  password: 'root',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

const mongoose = require('mongoose');
const dotenv = require('dotenv');

// config environement
dotenv.config();
console.log('hhh >>>>> ', process.env.MONGO_URL);
const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to MongoDB Atlas Database __: ${conn.connection.host} `,
    );
  } catch (error) {
    console.log(` Error in MongoDB __: ${error}`);
  }
};
module.exports = ConnectDB;
