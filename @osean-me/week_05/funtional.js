// map()
// map() 함수는 콜백 함수를 Array / Object 객체에 속한 Property 를 순회하면서 호출하여 각 순회의 결과를 리턴하도록 한다.

// Array map()
// 결과 > [ 10, 20, 30 ]
const arr = [1, 2, 3].map((value) => value * 10);

// Object map()
/* 결과 > 
  [
    [ 'firstfirst', [ 2, 4, 6 ] ],
    [ 'secondsecond', [ 8, 10, 12 ] ],
    [ 'thirdthird', [ 14, 16, 18 ] ]
  ]
 */
const obj = Object.entries({
  first: [1, 2, 3],
  second: [4, 5, 6],
  third: [7, 8, 9],
}).map((entry) => {
  entry[0] += entry[0];
  entry[1] = entry[1].map((value) => value * 2);
  return entry;
});

console.log(arr, obj);

// filter()
// filter() 함수는 Array / Object 에 속한 Property 를 순회하면서 콜백 함수를 호출하는데, 이 때 결과가 true 인 Property 만 객체에 담는다.

// Array filter()
// 2의 배수인 값만 남긴다.
// 결과 > [ 0, 2, 4, 6, 8 ]
const arrFilter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
  (value) => value % 2 === 0
);

// Object filter()
// Value 에 홀수만 있는 Property 만 걸러내어 Object 객체로 리턴하도록 한다.
// 결과 > { arr1: [ 1, 1, 1 ], arr3: [ 3, 3, 3 ] }
const objFilter = Object.entries({
  arr1: [1, 1, 1],
  arr2: [2, 2, 2],
  arr3: [3, 3, 3],
})
  .filter((entry) => entry[1].every((value) => value % 2 > 0))
  .reduce((prev, current, index) => {
    prev[current[0]] = current[1];
    return prev;
  }, {});

console.log(arrFilter, objFilter);

// reduce()
// reduce() 함수는 초기화 값을 기준으로 Array / Object 의 Property 를 순회하며 정의한 콜백 함수를 호출하고, 이에 대한 결과를 초기화 값에 누적한 결과를 리턴하도록 한다.

// Array reduce()
// from Map to Array
// 결과 > { index0: 100, index1: 200, index2: 300 }
const arrReduce = [1, 2, 3].reduce((prev, current, index) => {
  prev[`index${index}`] = current * 100;
  return prev;
}, {});

// Object reduce()
// from Number to Object
// 결과 > 58
const objReduce = Object.values({
  first: {
    name: "심성헌",
    age: 28,
  },
  second: {
    name: "임진빈",
    age: 30,
  },
}).reduce((prev, current, index) => (prev += current.age), 0);

console.log(arrReduce, objReduce);
