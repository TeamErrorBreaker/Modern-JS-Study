// 4장. 변수

// 아래 출력한 10, 20, (10 + 20) 은 재사용 할 수 없다.
// 아래에 선언한 값들을 다른 연산에서 재사용하기 위해서는 변수로 선언해야 한다.
console.log(`${10} + ${20} = ${10 + 20}`);

// 변수는 하나의 값을 저장하기 위한 수단이다.
// 10, 20, (10 + 20) 의 값을 변수에 할당해보자.
var var1 = 10; // Primitive Type
var var2 = 20; // Primitive Type
var var3 = var1 + var2; // Primitive Type
// 변수는 하나의 값을 저장하기 위해 메모리에 할당된 공간 그 자체(Primitive Type) 또는 메모리 공간을 식별하기 위한 이름(Reference Type) 이다.
console.log(`var1 + var2 = ${var3}`);

// 변수에 여러 값을 할당 할 수 있다.
var arr = [0, 1, 2, 3, 4, 5]; // 배열 형태로 여러 개의 값을 저장
var obj = { id: "012345", name: "심성헌", birthday: 19950304 }; // 오브젝트의 필드에 여러 개의 값을 저장
var objArr = [
  { id: "012345", name: "심또익", birthday: 20140101 },
  { id: "678901", name: "심꼬망", birthday: 20171001 },
]; // 배열 형태의 객체에 여러 개의 오브젝트 객체를 저장
console.log(arr, obj, objArr);
