import { createPool } from "mysql2";

const config = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
};

const pool = createPool(config);
const db = pool.promise();

export default db;
