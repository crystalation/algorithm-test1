//0부터 9까지의 숫자 중 없는 숫자 찾아서 더한 값 반환하기

var numbers = [1, 2, 3, 5, 9]; // 0,4,6,7,8 을 더한 25를 구해야함.

//arr를 돌면서 [0,1,2,3,4,5,6,7,8,9] 와 비교함
//여기서 includes 함수를 쓴다!!
//[0,1,2,3,4,5,6,7,8,9]는 따로 지정해줄 필요 없이 반복문을 만들면됌.
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) answer += i;
  }
  return answer;
}

console.log(solution(numbers));

// for (let i = 0; i < 3; i++) {
//i는 index임!!!!!!!!!!!!!!숫자가 아님을 인지. 즉 위치라는 뜻; 0,1,2 이렇게 돌것
//여기서는 S,B가 몇개인지 알려주는 단계.
// if (input[i] === threeNums[i]) {
//     //input과 threeNums의 위치가 정확히 일치할 시.
//     strike += 1; //STRIKE가 몇개인지 알려주는 개념, 즉 S가 3개 나와야 끝남.
//   } else if (threeNums.includes(input[i])) {
//     ball += 1;
//   }
// } //여기까지는 strike 가
