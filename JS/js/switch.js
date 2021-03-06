/*
    ?switch
    * switch는 딱딱 떨어지는 값의 조건을 비교할때 사용한다.
    * ( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// ex.2 홀짝을 switch문으로 변경
function switchGrammar(){
    var input = Number(window.prompt('숫자를 입력하세요.'));
    switch(input % 2){
        case 0 :
            alert('짝수입니다.');
            break;
        case 1:
            alert('홀수입니다.');
            break;
        default :
            alert('숫자가 아닙니다.');
            break;
    }
}

 // *exp.3 lotto과제를 switch로 변경
 function lotto(){
    var numbValue = window.prompt('입력하실번호는?');

    switch(numbValue){
        case "1":
            alert('1등 10억!');
            break;
        case "2":
            alert('2등 5천!');
            break;
        case "3":
            alert('3등 300!');
            break;
        default:
            alert('낙첨...');
            break;
    }
}

//ex.4 switch 문을 이용한 계산기
//? 첫번째 숫자 와 연산자 와 두번째 숫자를 입력받아 계산해주는 계산기
function calculator(){
    var firstnumber = window.prompt('첫번째 숫자를 입력해주세요.');
    var operator = window.prompt('연산자를 입력해주세요.');
    var lastnumber = window.prompt('마지막 숫자를 입력해주세요.');
    firstnumber = parseInt(firstnumber)
    lastnumber = parseInt(lastnumber)
    // parseInt = 정수로 만들어주는 함수

    switch(operator){
        case "+":
            alert(firstnumber+lastnumber);
            break;
        case "-":
            alert(firstnumber-lastnumber);
            break;
        case "*":
            alert(firstnumber*lastnumber);
            break;
        case "%":
            alert(firstnumber/lastnumber);
            break;
        default :
            alert('숫자가 아닙니다.');
            break;
    }
}
