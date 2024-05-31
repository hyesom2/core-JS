/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 &&
let AandB = a && b;
console.log('AandB :', AandB); // 빈 문자가 나옴
// 논니곱 할당 연산자 a &&= b === a = a && b

// 논리합(또는) 연산자 ||
let AorB = a || b;
console.log('AorB :', AorB); // 10
// 논리합 할당 연산자 a ||= b === a = a || b

// 부정 연산자
let reverseValue = !value;
console.log('reverseValue :', reverseValue);

// 조건 처리


// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
// true
// ' ' > true : Boolean(' ') 하면 true가 나옴
// [](빈배열) > true
// {thisIsFalsy:false} > false : key와 value이기 때문에 value인 false가 나옴
console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || {thisIsTruthy:true};
// false
// ''(빈문자) > false
// [2, 3].length (배열의 길이) > true > 2
console.log(whichTruthy); // 2

let userName = prompt('사용자 이름을 적어주세요.', '이름을 적어주세요.');

if(userName?.toLowerCase() === 'admin') {
  let userPwd = prompt('비밀번호 입력해주세요.', '비밀번호를 입력해주세요.');

  if(userPwd.toLocaleLowerCase() === 'themaster') {

    console.log("환영합니다!");
  } else if(userPwd === '' || userPwd === null) {
    console.log('취소되었습니다.');
  } else {
    console.log("인증에 실패하였습니다.");  
  }
} else if(userName === null || userName?.includes(' ')) {
  console.log("취소되었습니다.");
} else {
  console.log("누구세요?");
}