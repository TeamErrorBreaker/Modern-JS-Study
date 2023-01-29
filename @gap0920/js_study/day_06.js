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

16. 프로퍼티 어트리뷰트
이건 잘이해가 안되어 정리를 어떻게해야할지.. 감이 안잡힘 하루에 한번씩 219 ~ 232페이지 예제라도 정독 ㄱㄱㄱ 제발 하자

please god dam fuck student okay?


17. 생성자 함수에 의한 객체 생성

[1] object 생성자 함수 생성
const person = new Object();

person.name = 'Lee';
person.say = function(){
    console.log('HI MY IS ' + this.name);
}
console.log(person); // {name: 'Lee', say: ƒ}
person.say(); //HI MY IS Lee

생성자 함수란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다.
생성자 함수에 의해 생성된 객체를 인스턴스라고 말한다.
자바스크립트는 Object 생성자 이외에도 String, Number, Boolean, Function, Array, Date등 빌트인(built-in) 생성자 함수를 제공함.

new 연산자와 함께호출하면 해당 함수는 생성자 함수로 작동됨 but new연산자와 함께 호출을 안하면 그냥 일반 함수로 호출함

function Circle(radius){
    this.radius = radius;
    this.getDai = function(){
        return 2 * this.radius;
    }
}

const circle3 = Circle(15); // 그냥함수로 호출함
console.log(circle3); //undefinde
//일반함수로 호출된 Circle 내에 있는 this는 전역 객체로 됨.
console.log(radius); //15;

1.인스턴스 생성과 this바인딩

function Circle(radius){
    //1.암묵적으로 빈 객체가 생성ㅅ됨
    console.log(this); //Circle{}

    this.radius = radius; // 여기서 매개변수 radius=1 이면 Circle{radius:1}이런식으로 추가됨
    this.getDai = function(){
        return 2 * this.radius;// 여기는 Circle{radius:1, getDai:ƒ}이런식으로 추가됨
    }
    console.log(new.target)
}

//여기서 new.target을 사용하면 new연산자를 선언한 생성자함수에 대한것을 가져올수있음
//ex)
const test = new Circle(5); //new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다. => ƒ Circle(radius){...}

const test2 = Circle(5);    //그렇지않는것은 일반함수로 실행되 undefined로 실행됨.

