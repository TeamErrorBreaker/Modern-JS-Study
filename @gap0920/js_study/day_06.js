15.let, const 키워드와 블록 레벨 스코프와 블록레벨스코프

[1] var => 이키워드로 선언안 변수는 중복선언이 가능하다
ex) var x = 1;
    var y = 2;
    console.log(x); // 2
초기화문이 없는 변수 선언문은 무시된다. 
var x = 100;
var y; // 무시
console.log(x); // 100

1. var키워드로 선언한 변수는 코드블록 내에서 선언을 해도 모두 전역변수가 된다.
ex)
var x = 10;
if(ture){
    var x = 1;
}
console.log(x); // 1;

for문을 해도 똑같다.
for(var i=0; i<5 i++) console.log(i) // 5;

2. var 전역 객체

var키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
ex) var x = 1;
console.log(window.x); //1
console.log(x); //1

함수도 똑같다
function y () {}
console.log(window.y); //ƒ y () {}
console.log(y); //ƒ y () {}


[2] let => 이키워드로 선언한 변수는 중복선언을 하면 에러가난다.
let x = 1;
let x = 2; // syntaxerror : x has already 어쩌구..저쩌구..

1. let 선언한 변수는 모든 코드블록(if,for,while문등)을 지역스코프로 인정하는 블록 레벨 스코프를 따른다
ex)
let foo = 1;
if(true){
    let foo = 2;
    let bar = 3;
}
console.log(foo);   // 1;
console.log(bar);   //VM390:7 Uncaught ReferenceError: bar is not definedat <anonymous>:7:13

2. let 전역 객체

let / const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다
ex) let x = 1;
console.log(window.x); //undefined
console.log(x); //1

[3] const => 이키워드로 선언한 변수는 let키워드로 선언한 변수랑 거의 동일하다.
1. 
ex)
const x = 1;
x = 2; ////error 재할당 안됨(Uncaught TypeError: Assignment to constant variable.)
{
    const x = 2; //  블록스코프를 갖고있음
}
console.log(x) ; //1

2. const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경 할 수 는 있다. const 변수의 재할당을 금지하는것이지 객체 할당값은 변경가능

ex)
const person = {
    age:'10',
    name:'im'
}
person.age
'10'
person.name = 'kim';
'kim'
person.name
'kim'
근데 여기서 const person = 10; //이건 에러 남 

이해됨? 오키?? 도키