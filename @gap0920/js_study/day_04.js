함수
1. 함수란 입력input을 받아 출력output을 내보내는 일련의 과정을 정의한것이다.
    ex) 
    function add(x,y) {
        return x+y;
    }

    함수를 사용하는 이유는 코드재사용측면에서 유용하고 유지보수의 편의성과 코드의 신뢰성,가독성을 높일수 있다.

    함수 선언문 : function add(x,y){
                    retrun x+y;
                }

    함수 표현식 : var add = function (x,y){
                    retrun x+y;
                }

    함수는 함수 이름으로 호출하는것이 아니라 함수 객체를 가르키는 식별자로 호출한다. 
    즉 함수 선언문으로 생성한 함수는 함수이름이 add가 아니라 자바스크립트 엔진이 암묵적으로 생성한 식별자 add인것이다.


    기명함수 표현식 
    var add = function foo(x,y){
        retrun x+y;
    }
    //식별자로 호출(정상)
    console.log(add(2,5)); // 7
    //함수 이름으로 호출하면 레퍼런스 에러
    //함수이름은 함수 ㅗㅁㅁ체 내부에서만 유효한 식별자이다.
    console.log(foo(2,5)); // referenceError : foo is not defined

2. 함수 생성 시점과 함수 호이스팅

    console.dir(add);
    console.dir(sub);

    console.log(add(2,5)); // 7
    console.log(sub(2,5)); // sub is not a function

    function add(x,y){
        retrun x+y;
    }

    var sub = function (x,y){
        retrun x+y;
    }

    위 예제를 살펴보면 함수선언문으로 나중에 선언을 해도 호이스팅때문에 함수선언문은 먼저 선언이 된거처럼 실행이된다 반면
    함수 표현식으로 실행시키면 호이스팅으로 먼저 선언한 변수가(sub)이 선언되어 아무것도 없는 변수로 인식하여 언디파인드가 나와 에러가 나온다.add

    여기서 호이스팅이란?? 검색 ㄱㄱ


      
