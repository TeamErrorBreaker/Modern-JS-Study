/*
[6] 데이터 타입

## 타입종류 :  1.숫자 ,2.문자열, 3.boolean(참(true),거짓(false)), 4.undifined, 5.null, 6.심벌(Symbol)

1. 숫자(종류) : integer(정수), double(실수), negative(음의정수), binary(2진수), octal(8진수), hex(16진수) ** var x = '123asdf'-> NaN
2. 문자열 : string **따옴표를 감싸지 않으면 식별자로 인식 ex) var x = hello 여기서 hello 식별자로 인식
3. boolean : 참(true), 거짓(false) 밖에 없다.
4. undifined : 변수를 선언후 값을 할당하지 않으면 자바스크립트 엔진이 기본적으로 undefined를 할당함(undefined를 직역하면 "정의되지 않은" 이다.)
5. null : 자바스크립트는 대소문자를 구별해서 Null,NULL 이랑은 틀리다. 함수가 유요한 값을 반환할 수 없는 경우 명시적으로 null을 반환하기도함.
6. 심벌(symbol) : 변경이 불가능한 원시타입 값, 중복되지 않는 유일무의 한 값(33장에서 자세히 알아볼 예정)


* 데이터 타입에 의한 메모리 공간의 확보와 참조

ex) var a = 100;
    var b = 100;
이면 예를 들어 a라는 식별자는 0x111에 할당되고, b라는 식별자는 0x112에 할당된다. 여기서 100이라는 값은 0x123에 할당된다고 가정했을때    
b = c;
c = d; 라고 했을때 c와d의 값은 100이라는 값을 가져오는게 아닌 100이라는 값이 할당되있는 자리에 있는 값들이랑 비교를하여 0x123에 할당되있는 100이라는 값을 가져오는것이다.

## 연산자 

    1. 이항 산술 연산자
    -> + , - , * , / , %    

    2. 단항산술연산자
    -> ++ , --  

    3. 문자열 타입을 숫자로 바꿀때
    -> var x = '1';
       +x -> 숫자타입으로 변함(많이씀)

    4. 할당 연산자
    -> = , += , -= , *= , /= , %=

    5. 비교연산자
    -> ==(동등비교) : 값이 같음
       ===(일치비교) : 값과 타입이 같음
       !=(부동등비교) : 값이 틀림
       !==(불일치 비교) : 값과 타입이 틀림

       **여기서 동등비교 같은 경우는 예를들어 타입이 숫자인 1과 문자열인 '1'을 동등비교 할때 한쪽에 형(type)을 바꾸어 비교를한다
       (좌항과 우항의 피연산자를 비교할때 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.)
        ex) 1 == '1' 이면 한쪽인 '1'을 1 == integer('1') 이런식으로 형을 바꿔서 비교함

    6. 대소 관계 비교 연산자
    -> > , < , >= , <=

    7. 삼항 조건 연산자
    var x = 2;

    var rs = x % 2 ? '홀수' : '짝수'; 이런식으로 변수에 담을수 있지만

    var rs = if(x % 2){ rs2 = '홀수' } else { rs2 = '짝수' } 이건안됨(그냥 if문)

   

    7. 논리 연산자
    -> ||(or) , &&(and) , !(부정,not)

    ** 드모르간 법칙(&&(and)는 ||(or)이 되고 ||(or)은 &&(and)가 됨)
    !(x || y) -> (!x && !y)
    !(x && y) -> (!x || !y)

    8. 쉼표 연산자
    -> var x , y, z
    x = 1, y = 2, z = 3 이면 결과값 3이 나옴

    9. 그룹 연산자
    -> var x = 10 * (2 + 3);

    10. 타입 연산자
    -> typeof를 쓰면 각각에 맞는 타입이 나옴
    ex) typeof '' -> String, typeof 1 -> Number 등등...x

    11.지수 연산자

    2 ** 2 = 2의 2승;

    2 ** 2 === Math.pow(2,2); 같음

    12. 연산자 우선순위
    -> 헷갈린다 싶으면 괄호()를 하여 연산을 하면 된다 ㅋㅅㅋ;

     */

        
        









