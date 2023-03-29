const mariadb = require('mariadb');
const pool = mariadb.createPool({host :"localhost", user: "dgchoi3904", connectionLimit: 5});

async function SQLConnection() {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query("use testdb");
    //testdb 접속
    const res = await conn.query("select * from test1");
    //testdb의 test1테이블 가져오기
  } finally {
    if (conn) conn.release(); // pool을 해제
  }
}
SQLConnection();