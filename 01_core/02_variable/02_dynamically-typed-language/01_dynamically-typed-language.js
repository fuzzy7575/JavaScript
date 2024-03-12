/* 동적 타입 언어 (dynamic / weak type language) */

var test;
console.log(typeof test);   // undefined

test = 1;
console.log(typeof test);   // number

test = 'JavaScript';
console.log(typeof test);   // string

test = true;
console.log(typeof test);   // boolean

test = null;
console.log(typeof test);   // (object o, null x - 자바스크립트의 버그이지만 기존 코그에 영향을 줄수 있어서 수정 x)

test = Symbol();
console.log(typeof test);   // symbol

test = {};
console.log(typeof test);   // object

test = [];
console.log(typeof test);   // object

test = function(){};
console.log(typeof test);   // function