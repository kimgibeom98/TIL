// 고차함수 예제풀이

// 3씩 곱해지는 함수를 작성
function data(a){
    return a * 3
} 
function solution(arr, fn){
    let num = arr;
    let char = [];
    for(let i  of num){
            char.push(fn(i));
    }
    return char;
}


console.log(solution([1,2,3,4,5], data))


// 배열이 3 이상만 나오는 함수를 작성 data함수에서 return 값을 boolean으로 받기
function data(a){
    return a >= 3;
} 


function solution(arr, fn){
    const char = [];
    for(let i  of arr){
        if(fn(i)){
            char.push(i);
        }
    }
    return char;
}


document.write(solution([1,2,3,4,5], data))


// 위에 진행했던 배열 문제를 filter함수와 map함수를 이용해서 코드를 간소화하기

// 1. map
function solution2(arr){
    const char = arr.map(a => a * 3);
    return char;
}


document.write(solution2([1,2,3,4,5]))

// 2. filter
function solution2(arr){
    const char = arr.filter(a => a >= 3);
    return char;
}


document.write(solution2([1,2,3,4,5]))

// filter 라는 함수는 조건문을 만족한 요소들을 반환함,
// map은 골백함수가 적용된 새 요소,

// map은 콜백함수가 적용된 새로운 요소를 저장함.- 산술된 값을 리턴
// filter는 조건문을 만족하는 요소들을 반환하는 함수 - 논리연산자 true값을 이용해 배열을 만듬

// map 이 반환하는 새 배열의 요소 개수는 변하지 않지만 filter 가 반환하는 새 배열의 요소 개수는 변한다. filter 는 조건에 따라 요소들이 필터링되어 나오기 때문이다.