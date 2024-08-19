import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: "database-1.c1ouiaos8st9.us-east-1.rds.amazonaws.com",// I ALREADY DELETE THIS SHIT
  user: "admin",
  password: "shhsabjasbjkasd",  
  database: "sdfbshbfjkbf",
  port: 3306,
});

(async () => {
  try {
    const connectionTest = await connection.getConnection();
    console.log("Conexión exitosa a la base de datos");
    connectionTest.release();
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
})();

export default connection;
