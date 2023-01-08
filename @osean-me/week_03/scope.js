// 13-3 Scope Chain
// 함수는 중첩될 수 있으므로 함수의 지역 스코프도 중첩될 수 있는데, 이는 스코프가 함수의 중첩에 의해 게층적 구조를 갖는다는 것을 의미한다.
// 변수를 참소할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며, 선언된 변수를 검색(Identifier Sesolution) 한다.
// 이러한 스코프 체인은 실체로 존재하는데, 자바스크립트 엔진은 렉시컬 환경을 실제로 생성한다.
// 변수 선언이 실행되면 변수 식별자가 이 자료구조에 키로 등록되고, 변수 할당이 일어나면 이 자료구조의 변수 식별자에 대항하는 값을 변경한다. 변수의 검색도 이 자료구조 상에서 이뤄진다.

function foo() {
  console.log("global Fucntion foo");
}

function bar() {
  function foo() {
    console.log("local Function foo");
  }
  // 동일한 이름의 foo() 함수를 호출하면 식별자를 검색하는 규칙에 의해 지역 스코프 내부에 foo 라는 이름을 가지는 식별자를 찾고,
  // 해당 스코프 내부에 존재하는 경우 찾은 foo 함수를 호출하고 종료하며, 그렇지 않은 경우 상위 스코프에서 찾는다.
  foo();
}

bar();

// 13-4 Functin Level Scope
// var 키워드로 선선된 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다.
var x = 10;

if (true) {
  // var 키워드로 선언된 변수는 함수 스코프만 지역 스코프로 인정한다.
  // 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수이다.
  var x = 100;
}

console.log(x); // 100

function sum() {
  // var 타입의 변수는 함수 스코프만 지역 스코프로 인정하기 때문에
  // 함수 스코프 내부에서 동일한 변수명으로 정의해도 다른 변수로 인식한다.
  var x = 1000;
  return x + x; // 2000
}

console.log(sum(), x);

// 13-5 렉시컬 스코프
// 자바스크립트는 렉시컬 스코프를 따르는데, 이는 함수를 어디서 호출했는지가 아닌 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다.
// 즉, 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않기 때문에 함수의 상위 스코프는 언제나 자신이 정의된 스코프를 기준으로 한다.
var y = 1;

function foo2() {
  var y = 100;
  // 자바스크립트는 렉시컬 스코프를 따르기 때문에 자신이 호출된 곳을 기준으로 하는 것이 아니라
  // 자신이 정의된 곳을 기준으로 하기 때문에 이 때 bar2() 함수의 상위 스코프는 전역 스코프를 바라보고 있다.
  // 때문에 foo2() 함수 내부에 새롭게 정의된 y 는 bar2 에 전혀 영향을 끼치지 않는다.
  bar2();
}

function bar2() {
  console.log(y);
}

foo2(); // 1
bar2(); // 1