import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  waitForConnections: true,
  connectionLimit: 10,
});

async function initDB() {
  // ADMINS
  await pool.query(`
    CREATE TABLE IF NOT EXISTS admins (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100),
      password VARCHAR(255)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // BLOGS
  await pool.query(`
    CREATE TABLE IF NOT EXISTS blogs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255),
      description TEXT,
      image VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      content LONGTEXT,
      blocks LONGTEXT
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // JOBS
  await pool.query(`
    CREATE TABLE IF NOT EXISTS jobs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255),
      type VARCHAR(50),
      location VARCHAR(100),
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // ✅ APPLICATIONS (MISSING)
  await pool.query(`
    CREATE TABLE IF NOT EXISTS applications (
      id INT AUTO_INCREMENT PRIMARY KEY,
      job_id INT,
      firstName VARCHAR(100),
      lastName VARCHAR(100),
      phone VARCHAR(50),
      email VARCHAR(100),
      cv TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // ✅ CV SUBMISSIONS (MISSING)
  await pool.query(`
    CREATE TABLE IF NOT EXISTS cv_submissions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255),
      message TEXT,
      file VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // Seed admin
  const [admins] = await pool.query("SELECT id FROM admins LIMIT 1");

  if (admins.length === 0) {
    await pool.query(
      "INSERT INTO admins (username, password) VALUES (?, ?)",
      ["admin", "WE@znrsolutions123"]
    );
  }
}

// Run once when the module is first imported
initDB().catch((err) => console.error("DB init failed:", err));

export const db = pool;