/* ---------------------- */
/*       Condition        */
/* ---------------------- */

// let question = prompt('자바스크립트의 "공식"이름은 무엇인가요?');

// if(question === 'ECMAScript') {
//   alert('정답입니다!');
// } else {
//   alert('모르셨나요? 정답은 ECMAScript입니다!');
// }

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// let didWatchMovie = confirm('그 영화 봤니?');
// 영화 볼거니?
// if(didWatchMovie) {
//   console.log('응 봤어');
// } else {
//   let goingToWatchMovie = confirm('영화 볼거니?');
//   if(goingToWatchMovie) {
//     console.log('그래 보자');
//   } else {
//     console.log('싫어');
//   }
// } 


// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

// const message = didWatchMovie
//               ? '응 봤어'
//               : goingToWatchMovie ? '그래' : '너랑? 싫어';

// const message = didWatchMovie.includes('yes') ? '응 봤어' : '아니 아직'; // includes : 문자의 메소드
const message = didWatchMovie.includes('yes') ? '응 봤어' : goingToWatchMovie.includes('yes') ? '그래' : '싫어'; // includes : 문자의 메소드
console.log(message);