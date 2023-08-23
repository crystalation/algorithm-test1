var n = 123; // answer = [3,2,1]

//나의 접근 : n을 문자화 시켜서 배열에 넣은 후 내림차순으로 정렬!
//오류 : n을 문자화 시켜 배열에 넣기 까지는 맞았으나 내림차순에서 틀렸다.
//n은 12345가 될수도있고 43251도 될 수 있기 때문에..
//즉 n = 43251일때 우리가 원하는 결과 값은 54321이 아닌 [1,5,2,3,4] 라는 뜻.
//접근을 각 요소의 위치로 해야겠다.

//1. 실패한 코드
// function solution(n) {
//   var answer = [];
//   const numString = n.toString(); //'123'
//   const eachNum = numString.split(""); //['1','2','3']
//   for (i = 0; i < eachNum.length; i++) {
//     eachNum[i] = Number(eachNum[i]); //[1,2,3]
//   }

//   for (i = 0; )

//   return answer;
// }

// console.log(solution(n));

//2.성공한 코드
function solution(n) {
  var arr = n.toString().split(""); //split의 결과는 배열이다!!
  // 123을 '123'시키고 ['1','2','3']으로 나눔. 함수 간소화
  var answer = [];
  // 이제 ['1','2','3']을 [1,2,3]으로 만들고 [3,2,1]로 만들어야함.
  for (let i = arr.length - 1; i >= 0; i--) {
    //i = 2, i가 0보다 크거나 같아질때까지만, 즉 2->0으로 작아진다, 조건에 충족하면 i는 1씩 작아진다.
    //for 문의 let i= 는 처음 한번만 실행되는것임을 꼭 인지할 것 .
    answer.push(Number(arr[i]));
  }
  return answer;
}

console.log(solution(n));
