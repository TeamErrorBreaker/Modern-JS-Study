제어문

1. 조건문 

[1] if() ... else 문

[2] 삼항조건연산자 : 값으로 평가되는 표현식을 만든다. 따라서 삼한 조건 연산자 표현식은 값처럼 사용할수가 있기때문에 변수에 할당할수가 있다.
                    하지만 if ...else문은 표현식이 아닌 문으로써 변수에 할당을 할수가 없다.
[3] switch문

    swhich(표현식){

        case 표현식 1:
            swhich문의 표현식과 case 이 표현식이 일치하면 실행될 문;
        break; 

        default:
            swhich문의 표현식과 일치하는 case문이 없을때 실행될문;
    }
    default문에는 break문을 생략하는것이 일반적이다.(맨마지막으로 default를 쓸때만 중간에 default을 쓸때는 break를 써야한다.)

2. 반복문

[1] for(var i =0; i < 2; i++){

        }문
[2] while문 : 조건문의 평가 결과가 거짓이면 실행하지 않고 종료한다.

    var count = 0;
    while(count<3){
        console.log(count); //0,1,2 까지실행함 3이상은 거짓이니까;
    }

[3] continue문 : break처럼 반복문을 탈출하는게 아닌 현시점에서 중단하고 증감식으로 실행의 흐름을 이동ㅇ시킨다.(건너뛴다.)

    var string = "Hello World";
    var search = 'l';
    var count = 0;

    for(var i=0; i<string.length; i++){
        if(string[i] !== search) continue; // 이조건이 만족되면
        count++;                           // 이 문은 실행이 되지 않는다.
    }
    console.log(count) // 3

2. 타입변환과 단축 평가
[1] 문자열타입으로 변환
    ex) var x =10;  // number
        var str = x.toString();
        console.log(typeof str,str) //string (str의 형식만 변경된것이다.)
        console.log(typeof x,x) //number(x의 형식은 변경이 안된것임)

        다른방식

        var str = x + '';
        console.log(typeof str,str) //string (str의 형식만 변경된것이다.)
        console.log(typeof x,x) //number(x의 형식은 변경이 안된것임)
[2] 숫자타입으로 변환
    ex) 1 - '1' // 0
        +''     // 0
        +'0'    // 0
        +'1'    // 1

    parseInt(a,b) -> a=변환할 숫자 입력, b=진법수설정 생략시 10진법
[3] 논리연산자를 사용한 단축 평가
    true || anything -> true
    false || anything -> anything
    true && anything -> anything
    false && anything -> false