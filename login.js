const mariadb = require('mariadb');
const http = require('http');
const fs = require('fs');
//DB서버 접속
const pool = mariadb.createPool({host :"192.168.0.140", user: "dgchoi3904", password:'1234', database:'DGChoi3904', connectionLimit: 5});
// 쿼리스트링 import하기
const querystring = require('querystring');

async function SQLConnection() {
  let conn;
  
  try {
    let htmldata;
    conn = await pool.getConnection();
    //testdb 접속
    //htmldata = fs.readFileSync("./index.html",{encoding: "utf-8"});
    //console.log(htmldata);
    //await conn.query(`insert into htmltest(html_text) values ('${htmldata}')`);
    const res = await conn.query(`show tables`);
    console.log(res);
    //fs.writeFileSync('./newindex.html', res[0]['html_text'],"utf-8");
    //testdb의 test1테이블 가져오기
  } finally {
    if (conn){
      conn.release(); // pool을 해제
    } 
  }
}

const server = http.createServer((request,response)=>{
  if(request.method === 'GET' && request.url === '/'){
      console.log(request.url);
      response.writeHead(200,{"Content-type":"text/html"});
      response.write(fs.readFileSync("./index.html","utf8"));
      response.end();   
  }
  if(request.method === 'POST'){
      //post로 들어간 데이터는 request의 body에 들어간다. 버퍼화되어있기에 이를 toString을 통해 문자열로 변환하면 읽힌다.
      //post의 body에 들어간 데이터 불러오는 구문.
      request.on('data', (chunk)=>{
        // 받은 id와 pw 기록(버퍼화되어있음)을 문자열로 변환하는 작업.
        // user_id=<입력한 아이디>&user_password=<입력한 암호>
        let data = querystring.parse(chunk.toString());
        console.log(data['user_id'])
        console.log(data['user_password'])
        console.dir(data);
        console.log(data.hasOwnProperty('user_id'));
      })
      response.writeHead(200,{"Content-type":"text/html"});
      response.write(fs.readFileSync("./index.html","utf8"));
  }
})
//SQLConnection();
server.listen(8036, err=>{
  if(err){
    console.error(`${err}가 발생했습니다.`)
  } else{
    console.log('포트 8036으로 연결되었습니다.')
  }
});