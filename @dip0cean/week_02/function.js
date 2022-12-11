// 12-7-1 즉시 실행 함수
// 즉시 실행 함수는 함수 정의와 동시에 실행되어 값을 리턴한다.
// 이러한 즉시 실행 함수는 단 한 번만 호출되며 재사용 할 수 없다.
let result = (function (a, b) {
  return a + b;
})(10, 20);
console.log(result);

// 기명 함수로 즉시 실행 함수를 정의할 수 있지만, 해당 함수명으로 재사용은 불가능하다.
result = (function multiple(a, b) {
  return a * b;
})(result, 100);
console.log(result);
// console.log(multiple(10, 20)); // 기명 함수 호출 시, ReferenceError 발생

// 12-7-2 재귀 함수
// 재귀 함수란 자기 자신을 호출하여 불필요한 반복문을 줄이도록 하는 함수를 뜻한다.
// 이러한 재귀 함수를 이용해 팩토리얼 함수를 구현할 수 있다.
const factorial = (n) => {
  // 팩토리얼 함수를 탈출하기 위한 조건 > 재귀 함수는 탈출 조건을 설정하지 않으면 계속해서 자기 자신을 호출하기 때문에 메모리 부족으로 프로그램이 종료된다.
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5)); // 120

// 12-7-3 중첩 함수
// 중첩 함수는 함수 내부에서 정의되는 함수로 헬퍼 함수라고도 한다.
// 부모 함수 외부에서는 부모 함수 내부에 정의된 중첩 함수를 호출 할 수 없다.
const func = () => {
  // 즉시 실행 함수의 결과값을 a 변수에 할당
  const a = (function (a, b) {
    return a + b;
  })(10, 20);

  // b 에 함수 표현식을 정의하여 함수 정의
  const b = (c, d) => {
    return c - d;
  };

  return a * b(30, 40);
};
console.log(func());
// console.log(b(10, 20)); // b 함수는 func 함수의 내부 함수이므로 찾을 수 가 없어 not defined 에러를 발생 시킨다.

// 12-7-4 콜백 함수
// 콜백 함수란 함수를 파라미터 인자로 전달해 함수 내부에서 인자로 받은 함수를 호출하여 사용하도록 한다.
// 일반적인 함수 > 고차 함수에서 인자로 받으면 콜백 함수로 사용하게 된다.
function sum(a, b) {
  return a + b;
}

// result 는 콜백 함수를 인자로 받는 함수이므로 고차 함수라고 한다.
result = (v1, v2, v3, f) => {
  // 인자로 받은 함수를 호출하여 사용한다. > 콜백 함수
  return v1 + f(v2, v3);
};
console.log(result(10, 20, 30, sum));

// 12-7-5 순수 함수와 비순수 함수
// 순수 함수란 외부 변수에 의존하지 않고 인자로 받은 값을 이용해서 함수 내부에 정의된 내용을 처리하므로 의존성이 낮아 독립적으로 사용할 수 있다.
// 비순수 함수란 외부 변수에 의존하기 때문에 독립적으로 사용할 수 없고, 의존성이 높아 특정 조건을 만족하지 않으면 재사용이 어렵다.

let aVal = 10;
let bVal = 20;
let pure = (a, b) => a + b;
let nonPure = () => aVal + bVal;

console.log(pure(aVal, bVal), nonPure());
