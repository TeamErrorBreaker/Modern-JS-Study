// 16-1 내부 슬롯과 내부 메소드
// 내부 슬록과 내부 메소드는 ECMAScript 사양에 정의된 대로 구현되어 자바스크립트 엔진에서 실제로 동작하지만
// 개발자가 직접 접근하는 것은 허용하지 않는다.
// 이러한 [[Prototype]] 라는 내부 슬롯은 모든 객체가 가지는데, 이는 __proto__ 명령어를 이용하면 일부 내부 슬롯과 메소드에 간접적으로 접근 할 수 있다.
const obj = { a: "", b: "" };
console.log(obj.__prop__);

// 16-2 Property Attribute 와 Property Descriptor 객체
// 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
// 1. value 2. writable 3. emunerable 4. configurable
// 위의 프로퍼티 어트리뷰트에 직접 접근 할 수 없지만 다음 명령어를 이용하면 접근 할 수 있다.
const person = {
  name: "심성헌",
  age: 28,
};
/*
{
  name: {
    value: '심성헌',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 28, writable: true, enumerable: true, configurable: true }
}
*/
console.log(Object.getOwnPropertyDescriptors(person));
console.log(Object.getOwnPropertyDescriptor(person, "name"));

// 16-3 Data Property / Access Property
// - Data Property
// 데이터 프로퍼티는 자바스크립트 엔진이 프로퍼티를 생성할 때 자동으로 정의된다.
// 1. [[Value]] 2. [[Writable]] 3. [[Enumerable]] 4. [[Configurable]]
// - Access Property
// 엑세스 프로퍼티 자체로는 값을 갖지 않고, 다른 데이터 프로퍼티 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된다.
// 1. [[Get]] 2. [[Set]] 3. [[Enumerable]] 4. [[Configurable]]
const MyAddress = {
  basic: "서울시 강남구",
  additional: "삼성1동 코엑스 지하4층 지하주차장",

  get fullAdderss() {
    return `${this.basic} ${this.additional}`;
  },

  set fullAdderss(address) {
    [this.basic, this.basic] = address.split(",");
  },
};
console.log(MyAddress.fullAdderss);
MyAddress.fullAdderss = "서울시 구로구,신도림동 디큐브백화점 지하3층";
console.log(MyAddress.fullAdderss);

// * Prototype
// 프로토타입은 어떤 객체의 상위 객체의 역할을 하는 객체이며, 하위 객체에게 자신의 프로퍼티와 메소드를 상속한다.
// 프로토타입은 객체의 프로퍼티나 메소드를 상속받은 하위 객체는 자신의 프로퍼티 또는 메소드인 것처럼 사용할 수 있다.
// 프토로타입 체인은 프로토타입이 단방향 링크드 리스트 형태로 연결되어 있는 상속 구조를 말한다.
// 따라서 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면 프로토 타입 체인을 따라 차례대로 검색한다.

// 16-4 프로퍼티 정의
const Dog = {};
Object.defineProperty(Dog, "name", {
  value: "또익",
  writable: false, // 값이 false 인 경우, value 값을 재정의 할 수 없다.
  enumerable: false, // 값이 false 인 경우, Object.keys 나 for...in 문으로 열거 할 수 없다.
  configurable: false, // 값이 false 인 경우, 해당 프로퍼티를 삭제 / 재정의 할 수 없다.
});

// 16-5 객체 변경 방지
// 1. 객체 확장 금지
// - Object.preventExtensions > 프로퍼티 추가가 불가능하다.
// 2. 객체 밀봉
// - Object.seal >프로퍼티의 추가, 삭제, 어트리뷰트 재정의가 불가능하다.
// 3. 객체 동결
// - Object.freeze > 값 읽기를 제외한 나머지 모두 불가능하다.