const mariadb = require('mariadb');
const fs = require('fs');
//createPool - 서버연동, 이것이 없으면 DB에 접근이 불가능하다.
const pool = mariadb.createPool({host :"localhost", user: "dgchoi3904", password:'1234', database:'testdb', connectionLimit: 5});
//
async function SQLConnection() {
  let conn;
  
  try {
    let htmldata;
    conn = await pool.getConnection();
    await conn.query("use testdb");
    //testdb 접속
    htmldata = fs.readFileSync("./index.html",{encoding: "utf-8"});
    console.log(htmldata);
    //await conn.query(`insert into htmltest(html_text) values ('${htmldata}')`);
    const res = await conn.query(`select html_text from htmltest where html_id = 1`);
    console.log(res[0]['html_text']);
    fs.writeFileSync('./newindex.html', res[0]['html_text'],"utf-8");
    //testdb의 test1테이블 가져오기
  } finally {
    if (conn){
      conn.release(); // pool을 해제
    } 
  }
}
SQLConnection();