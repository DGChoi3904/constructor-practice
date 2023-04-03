//로그인 폼 입력한 url에서 id와 password만 추출하는 구문
let loginform = "user_id=asdf&user_password=12345" // 예제
let split = loginform.split('&'); // &를 기준으로 문장을 쪼갬. 인덱스0 user_id=asdf, 인덱스1 user_password=12345
console.log(split);
//추출방법
//문자열 내장함수 substring()을 사용, substring()은 지정한 첫 인덱스와 끝 인덱스안의 문자열을 순서대로 가져온다.
//문자열의 시작부분을 '='의 다음것으로 지정한 후, 전체 문자열 length로 끝부분을 지정, 원하는 부분만 추출한다.
// 인덱스0, user_id에서 입력받은 id만 추출하기
if(split[0].startsWith('user_id')){
  console.log(split[0].substring(split[0].indexOf('=')+1, split[0].length));
}
// 인덱스0, user_password에서 입력받은 password만 추출하기
if(split[1].startsWith('user_password')){
  console.log(split[1].substring(split[1].indexOf('=')+1, split[1].length));
}
//추출방법 2
//querystring을 사용하여 가져오기.
const querystring = require('querystring');
let data = querystring.parse(chunck.toString());
console.log(data['user_id'])
console.log(data['user_password'])