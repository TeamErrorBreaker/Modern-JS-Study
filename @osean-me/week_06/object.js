// 17-1 Object 생성자 함수
// 생성자 함수는 new 연산자와 함께 호출하여 객체를 생성하는 함수를 말한다.
const person = new Object();
person.name = "심성헌";
person.age = 26;
person.greeting = function () {
  console.log(`안녕하세요. 저는 ${this.name}, ${this.age} 살 입니다.`);
};
person.greeting();

// 자바스크립트는 Object 생성자 함수 이외에도 String, Number, Array, Function, Date, RegExp 등
// 빌트인 생성자 함수를 제공한다.
const strObj = new String("Hello!");
const arrObj = new Array(1, 2, 3, 4, 5);
const numObj = new Number(100000);
const dateObj = new Date();
console.log(strObj, arrObj, numObj, dateObj);

// 17-2 생성자 함수
// 객체 리터럴에 의한 객체 생성 방식의 문제점
// 객체 리터럴에 의한 객체 생성은 단 하나의 객체만 생성한다.
// 때문에 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야 하기 때문에 비효율적이다.
const person1 = {
  name: "심성헌",
  age: 28,
  sayHello() {
    console.log(`안녕하세요. 저는 ${this.name}, ${this.age} 살 입니다.`);
  },
};

const person2 = {
  name: "심또꼬망",
  age: 15,
  sayHello() {
    console.log(`안녕하세요. 저는 ${this.name}, ${this.age} 살 입니다.`);
  },
};

// 하지만 생성자 함수를 사용한다면 프로퍼티 구조가 동일한 객체를 여러 개 만들 수 있다.
// 생성자 함수는 자바스크립트 엔진이 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`안녕하세요. 저는 ${this.name}, ${this.age} 살 입니다.`);
  };
}

const person3 = Person("심재똥", 25);
const person4 = Person("심토니", 10);

// this?
// this 키워드는 객체 자신의 프로퍼티나 함수를 참조하기 위해서 사용된다.
// 함수 호출 방식은 다음과 같다.
// 일반 함수로서 호출 > 전역 객체
// 메소드로서 호출 > 메소드를 호출한 객체
// 생성자 함수로서 호출 > 생성자 함수가 생성할 인스턴스

// 생성자 함수의 인스턴스 초기화 순서
// 1. 인스턴스 생성과 this 바인딩
// > 빈 객체가 생성되고 이 빈 객체가 this 에 바인딩된다.
// 2. 인스턴스 초기화
// > 생성자 함수에 기술되어 있는 코드가 한 줄씩 실행되어 this 에 바인딩되어 있는 인스턴스를 초기화한다. (이 처리는 개발자가 기술한다.)
// 3. 인스턴스 반환
// > 생성자 함수 내부의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this 를 암묵적으로 반환한다.

// 17-2-5 내부 메서드 [[Call]] / [[Construct]]
// 함수는 객체이므로 일반 객체와 동일하게 동작 할 수 있다.
function foo() {}
// 함수는 객체이므로 프로퍼티를 소유할 수 있다.
foo.message = "Hello";
// 함수는 객체이므로 메소드를 소유할 수 있다.
foo.printMessage = function () {
  console.log(this.message);
};
foo.printMessage();

foo(); // [[Call]] 일반적인 함수로서 호출한다.
const f = new foo(); // [[Constructor]] 생성자 함수로서 호출한다.

// 17-2-5 constructor / non-constructor 의 구분
// 자바스크립트 엔진은 함수 정의 방식에 따라 constructor / non-constructor 로 구분한다.
// - constructor : 함수 선언문, 함수 표현식, 클래스
// - non - constructor : 메소드, 화살표 함수

// 함수 선언문 > constructor
function Boo() {}
// 함수 표현식 > constructor
const bar = function () {};
const baz = {
  x: function () {},
};

// constructor
new Boo();
new bar();
new baz.x();

// 화살표 함수 정의 > non - constructor
const arrow = () => {};

// 메서드 정의 > non - constructor
const obj = {
  x() {},
};
// non - constructor
new arrow(); // TypeError
new obj.x(); // TypeError
