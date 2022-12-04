const a = 1;

a = 2;

//const 변수는 재할당을 할수가 없다..?
//변수로 선언할수없는것들
//1. 하이푼 ex) a-aa
//2. 첫글자가 숫자인것 ex) 1a, 5test
//3. this : 예약어이기때문

//firstname, firstName, FIRSTNAME 각각 다른변수로 인식

var sum = 10 + 20 ;
console.log(sum);
//sum = 30;
//이면 10+20 이라는 값이 변수에 설정되는것이 아닌 결과값이 설정된다.

//리터럴 : 문자그대로의 값 literal

/*
표현식으로 해당되는 문 or 아닌문 구분
표현식이 아닌 문은 값처럼 사용할수 없음

1.변순선언문 -> 값으로 표현될수없음 ex) var a;
2.할당문 -> 값으로 표현될수없음     ex) var a = var b;
=
3.함수선언문 -> 값으로 표현될수있음 ex) var a = function a(){}
4.조건문 -> -> 값으로 표현될수없음 ex)var a = if(){}
5.반복문 -> -> 값으로 표현될수없음 ex) var a = for(){}




*/



