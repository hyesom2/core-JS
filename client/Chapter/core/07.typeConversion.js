/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(typeof String(YEAR), String(YEAR)); // console창에서 하얗게 나오면 문자
console.log(YEAR + '');

// undefined, null
let days = null;
console.log( days + '');
let days2 = undefined;
console.log( days2 + '');

// boolean
// dot log 익스텐션 추천
let isClicked = true;
console.log(String(isClicked));


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined => NaN
let friend;
console.log( Number(friend) );

// null => 0
let money = null;
console.log( Number(money) );

// boolean true: 1, false: 0
let isActive = true;
console.log( Number(isActive) );

// string
let num = '100';
console.log( Number(num) );
console.log( num * 1 );
console.log( num / 1 );
console.log( +num ); // 단항연산

// numeric string
const width = '120.5px';
console.log(Number(width)); // px때문에 NaN으로 나옴

// 숫자만 뽑아내는 방법
console.log( parseInt(width, 10) ); // 120 (뒤의 10은 진수(radix)를 나타냄)
console.log( parseFloat(width, 10) ); // 120.5
// 참고) parseInt를 쓸 때 문자를 만나면 바로 끝남


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 