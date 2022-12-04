// 4-1. 변수

// 아래 출력한 10, 20, (10 + 20) 은 재사용 할 수 없다.
// 아래에 선언한 값들을 다른 연산에서 재사용하기 위해서는 변수로 선언해야 한다.
console.log(`${10} + ${20} = ${10 + 20}`);

// 변수는 하나의 값을 저장하기 위한 수단이다.
// 10, 20, (10 + 20) 의 값을 변수에 할당해보자.
var var1 = 10;
var var2 = 20;
var var3 = var1 + var2;
// 변수는 하나의 값을 저장하기 위해 메모리에 할당된 공간 그 자체 또는 메모리 공간을 식별하기 위한 이름 이다.
console.log(`var1 + var2 = ${var3}`);

// 변수에 여러 값을 할당 할 수 있다.
var arr = [0, 1, 2, 3, 4, 5]; // 배열 형태로 여러 개의 값을 저장
var obj = { id: "012345", name: "심성헌", birthday: 19950304 }; // 오브젝트의 필드에 여러 개의 값을 저장
var objArr = [
  { id: "012345", name: "심또익", birthday: 20140101 },
  { id: "678901", name: "심꼬망", birthday: 20171001 },
]; // 배열 형태의 객체에 여러 개의 오브젝트 객체를 저장
console.log(arr, obj, objArr);

// 4-2. 식별자
// 식별자는 값이 저장되어 있는 메모리 주소와 맵핑 관계를 가지고 있으며, 해당 맵핑 정보도 메모리에 가지고 있어야 한다.
// 즉, 식별자는 값 자체를 가지고 있는 것이 아니라 메모리의 주소를 가지고 있다.
// 변수, 함수, 클래스 등의 이름은 모두 식별자이며, 이러한 식별자는 메모리 상에 존재하는 변수 값을 식별 할 수 있다.
var variable1 = 1;
let variable2 = () => "It is Function!";
const variable3 = class NewClass {};
console.log(variable1, variable2(), variable3.name);

// 4-3. 선언
// 변수 선언은 var, let, const 라는 예약어를 통해 선언이 가능하다.

// (1) var 변수
// 해당 자바스크립트 파일 내에서 어디든 사용 가능하다. 다음 코드를 참고하자.
// 아래 코드를 보면 function 외부에 var 로 선언된 var1, var2 값이 함수 내부에서 재정의된 것을 확인 할 수 있다.
// 즉, var 타입의 변수는 블록 레벨 스코프가 아닌 함수 레벨 스코프를 지원하기 때문에 의도치 않게 전역 변수로 설정되어 어떻게 값이 변경될지 예측하기 어렵다.
// 또한 var 변수는 스코드 내부에서만 사용 할 수 있으며 스코프 외부에서는 사용 할 수 없다.
function example_1() {
  var1 = var1 * var2; // 200 으로 초기화
  var2 = var1 - var2; // 180 으로 초기화
  var var3 = var1 + var2;
  return var1 + var2; // 380 반환
}
var3 = example_1(); // 380 으로 초기화
console.log(var1, var2, var3);

// (2) let 변수
let let1 = 100;
let let2;
function example_2() {
  let1 = 10; // 10 으로 초기화
  let2 = let1 * 2; // 20 으로 초기화
  let let3 = let1 + let2; // 30 으로 초기화
  return let3 * 100; // 3000 반환
}
// let3 변수는 example_2() 함수 내부에 선언된 변수이기 때문에 해당 함수 스코프를 벗어나면 사용할 수 없다.
// 즉, let 변수는 함수 레벨 스코프를 지원하기에 의도치 않은 전역 변수 선언을 방지 할 수 있다.
// let let4 = let3; // ReferenceError: let3 is not defined
console.log(let1, let2); // let2 변수 또한 example_2() 함수 내부에서만 재정의 되었기 때문에 결과적으로 초기화 되지 않아 undifined 를 반환한다.

// (3) const 변수
const CONTANT_ID = 12345;
function example_3() {
  //   CONTANT_ID = 54321; // const 변수는 상수이기 때문에 재정의 할 수 없다. (Java > static final)
  console.log(CONTANT_ID);
}
example_3();
