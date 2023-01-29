13 스코프

음..스코프란?

자바스크립트의 기본적인 중요한 개념 

함수의 매개변수는 함수 몸체 내부에서만 참조할수 있고 함수 몸체 외부에서는 참조할 수 없음.
즉 매개변수의 스코프가함수 몸체 내부로 한정되있기때문이다.

ex)

function add(x,y){
    return x+y;
}

add(2,5); // 7

console.log(x,y); // x is not defined


var var1 = 1;

if(true){
    var2 = 2;
    if(true){
        var3 = 3;
    }
}

function foo(){
    var4 =4;
    function bar(){
        var5 =5;
    }
}

console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
console.log(var4); // referenceError: is not defined
console.log(var5); // referenceError: is not defined

let이나 const 키워드로 선언된 변수는 스코프내에서 중복선언을 못한다.
ex)
function add(){

    let x = 1;
    let x = 2; //syntaxerror : identiifier x has already been declared
}

스코프의 종류
코드는 전역(global), 지역(local)로 구분할수 있다

전역스코프 x 와 지역스코프 x는 다른 다른별개으 변수로 인식한다.

ex) var x = 1;

    for(var x = 0; x<5 x++){
        console.log(x);
    }


14. 전역변수의 문제점
전역변수를 무분별하게 사용하면 위험하다. 이번은 전역변수의 문제점과 저역변수의 사용억제할수 있는 방법에 대해서 보자.

지역변수의 생명주기

변수는 자신이 선언된 위치에서 생성되고 소멸한다. 하지만 함수내부에 선언된 지역 변수는 함수가 호출되면 생성되고 함수가 종료하면 소멸된다
ex)
fucntion foo(){

var x = 1;
console.log(x); //1
return x;

}
console.log(x); // x is not defined

전역변수의 생명주기
전역코드는 함수와같이 전역코드를 실행하는 특별한 진입점이 없이 코드가 로드되자마자 곧바로 해석되고 선안된다.
전역코드에는 반환무을 사용할수없고 마지막 문이 실행되어 더이상 실행할 문이 없을때 종료된다.

ex)
var x = 10;    //----------------------------------------
                                                        |
fucntion foo(){                                         |
                                                        |
var x = 1;     -----------------                        전역변수 x의 새명주기
console.log(x);                지역변수x의 생명주기      |
return x;      -----------------                        |
                                                        |
}                                                       |
console.log(x); // x is not defined----------------------

