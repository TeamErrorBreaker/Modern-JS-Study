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

3. 타입변환과 단축 평가
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

4.객체 리터럴

[1]객체란 0개 이상의 프로퍼티로 궝된 집합이며, 프로퍼티는 키key와 값value로 구성딘다

    var person = {
        name: 'Lee',
        age: 20
    }

    여기서 name, age 는 프로퍼티 이고 프로퍼티키는 name,age 이며 프로퍼티 값으론 'Lee',20이다.

    var person = {
        name: 'Lee',
        age: 20,
        num: 0
        increase : function(){
            this.num++;
        }
    }
    프로퍼티 값이 함수인경우는 일반함수와 구분하기위해 메서드(method)라고 부른다. increase가 메서드라고 할수있다.
    person.increase()로 접근할수 있다.

[2]프로퍼티 접근
    var person = {
        name:'lee'
    }
    마침표로 접근하기
    person.name // lee

    대괄호로 접근하기
    person['name']; // lee ** 대괄호로 접근을 할 때 반드시 프로퍼티의 key는 따옴표로 접근을해야한다 person[name] -> not defined 에러뜸

[3]프로퍼티 동적 생성

    var person = {
        name:'lee'
    }

    person.age = 20; 

    console.log(person) // {name:'lee', age:'20'}

[4]프로퍼티 삭제
    var person = {
        name:'lee'
    }

    person.age = 20; 
    delete person.age;

    console.log(person) // {name:'lee'}

[5] 객체의비교

var person1 = {
    name:'lee'
}

var person2 = {
    name:'lee'
}

console.log(person1===person2) // 같은 변수를 가르키는 내용은 같지만 각 다른메모리에 저장되있는 별개의 객체이기 때문이 false가 반환된다.
console.log(person1.name===person2.name) // 하지만 프로퍼티 값을 참조하는 person1.name , person2.name은 값으로 표현될수있는 표현식으로 표현식 원시값 lee로평가되어 true가 됨.
