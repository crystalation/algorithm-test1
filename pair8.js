//평균 구하기

//요소들의 합을 요소의 갯수로 나눈다.
//요소의 합부터 구하자

var arr = [1, 2, 3, 4]; // 답은 2.5가 나와야함!

function solution(arr) {
  var answer = 0;
  let sum = 0;
  for (i = 0; i < 4; i++) {
    // answer = (answer + arr[i])//라고 해도되지만 sum이라는 함수가 있따!
    sum += arr[i];
  }

  return (answer = sum / arr.length);
}
console.log(solution(arr));
