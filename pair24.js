var n = 118372; // var answer = 873211

//나의 접근 : 873211을 배열로 만들기 string, split 그 후 오름차순 정렬한 후에 숫자화시킴.
//오류 : 오름차순 정렬에서 막힘, 오름차순 정렬 후 배열을 어떻게 꺼내올지 막힘
//해결 : 배열의 문자열도 오름차수로 정렬할 수 있다는 점을 몰랐음. arr.sort(종류)로 해결, arr.join("")은 배열의 모든 요소를 하나의 문자열로 합침, parselnt 는 문자열을 정수로 변환하여 반환해줌. ---> 이 부분은 다른 식으로도 해석 가능 할듯?

function solution(n) {
  var arr = n.toString().split(""); //['1','2','3']
  var neWarr = arr.sort((a, b) => b - a); //['3','2','1']
  var answer = "";
  //   for (let i = 0; i < arr.length; i++) {
  //     answer += arr[i];
  //   }
  answer = parseInt(neWarr.join(""));
  return answer;
}

console.log(solution(n));

//나만의 코드 완성!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
