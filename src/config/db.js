import mysql from 'mysql2/promise';

const dbConfig = {
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '',
  database: 'service_repo',
};

let db;

async function connectDB() {
  if (!db) {
    try {
      db = await mysql.createConnection(dbConfig);
      console.log('Database connected');
      return db;
    } catch (error) {
      console.error('Database connection failed:', error.message);
      process.exit(1);
    }
  }
  return db;
}

export default {
  query: async (sql, params) => {
    const connection = await connectDB();
    return connection.query(sql, params);
  }
};