// 함수 스코프
// scope: 범위, 유효공간, 살수있는공간, 허용공간, 허용범위..
// 함수스코프: 함수에 의해서 생기는 범위. 변수의 유효범위

// 블락스코프 : block scope - 블락에 의해 생기는 유효범위. 블락이란 -> {}
// {} 에 의해서 변수의 유효범위가 결정된다.

// Hoisting ?

// var : 변수명만 위로 끌어올리고 / undefind를 할당한다.
// let, const : 변수명만 위로 끌어올리고 끝(할당을 하지 않는다.)

// if (true) {
//   let a = 10
//   if (true) {
//     console.log(a) it not defind
//     const a = 20
//   }
//   console.log(a)
// }
// console.log(a)

// -> TDZ : Temporal Dead Zone(임시사각지대)
// Ecmascript에서 정의한 개념은 아님


// this
// var value = 0
// var obj = {
//   value: 1,
//   setValue: function () {
//     this.value = 2; this : obj -> obj.value = 2;
//     (function () {
//       this.value = 3 this : window -> window.value = 3; this가 obj가 아닌 window인 이유는 메소드가 아닌 함수이다 함수를 바로 실행시킴.
//     })();
//   }
// }
// obj.setValue()
// console.log(value)
// console.log(obj.value)


// 참조타입 데이터의 경우

// const OBJ = {
//     prop1 : 1,
//     prop2 : 2
//   }
//   OBJ.prop1 = 3
//   console.log(OBJ.prop1) 실행시 OBJ안에 객체는 변경된다 그 이유는  obj라는 변수와 별개로 객체는 다른공간에 저장되어있다 그것을 참조하는게 obj

// let a = {a:1}
// const b = a;
// a = 20;
// b // {a:1}

// 얕은 복사
// let a = {
//     a : 1,
//     b : [1,2,3],
//     c : {d : 1, e : 2}
// }
// let b = Object.assign({}, a);
// b.b[1] = 20;
// console.log(a.b) [1,20,3];

// 깊은복사
// let a = {
//     a : 1,
//     b : [1,2,3],
//     c : {d : 1, e : 2}
// }
// let b = Object.assign({}, a);
// b.b = Object.assign([], a.b);

// b.b[1] = 20;
// console.log(b.b) [1,20,3];
// console.log(a.b) [1,2,3];

// 깊은복사를 해야만 immutable 하다



// 전역객체의 프로퍼티?

// js
// var a = 10
// console.log(window.a)
// console.log(a)
// delete a
// console.log(window.a)
// console.log(a)
//  var는 전역객체의 공간과 전역변수의 공간이 구분되지 않는다. var 사용 x

// window.b = 20
// console.log(window.b)
// console.log(b)
// delete b
// console.log(window.b)
// console.log(b)

// let c = 30
// console.log(window.c)
// console.log(c)
// delete c
// console.log(window.c)
// console.log(c)

// const d = 40
// console.log(window.d)
// console.log(d)
// delete d
// console.log(window.d)
// console.log(d)

// let과 const는 전역객체의 공간과 전역변수의 공간이 별개로 동작한다. let과 const사용 o