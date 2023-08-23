var n = 123; //답은 6
var n1 = 987; //답은 24

//우선 각 자릿수를 배열화 시키고, 배열화 시킨 것을 더하면 될듯? 접근 OK

//주어진 숫자를 자리별로 배열화 하는 단계
//1. 숫자->문자화, 123->'123'
//2. 문자화된 '123'을 []화 시켜야함. 새로운 []변수를 지정해준다.
//3. []안의 '123'을 스플릿 시켜줘야함.
//4. []안의 '123'이 스플릿 되어 배열에 들어가면 ['1','2','3']이 됌. 문자열끼린 더할 수 없으므로 다시 숫자화 시킨다. (결과 값에 Number만 달아주면 끝)
//5. 배열안의 요소가 숫자화 되면 [1,2,3]라는 배열이 탄생하고 이것을 다시 for문으로 돌려서 더한다!!씨발!!

function solution(n) {
  var arr = n.toString().split("");
  let answer = 0;
  const numString = n.toString(); //'123'
  const eachNum = numString.split(""); //['1','2','3']

  for (let i = 0; i < eachNum.length; i++) {
    eachNum[i] = Number(eachNum[i]);
    //['1','2','3']을 Number화 시켜서 [1,2,3]
  }
  for (let j = 0; j < eachNum.length; j++) {
    answer += eachNum[j];
  }
  return answer;
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
}
console.log(solution(n));
