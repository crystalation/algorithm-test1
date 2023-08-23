// var arr1 = [1, 2];
// var arr2 = [3, 4];
// //return answer = [[4,6],[7,9]]

// var sum = arr1.map(function (num, idx) {
//   return num + arr2[idx];
// });

// console.log(sum);

//다차원 배열의 합 구해보자
// var arr1 = [
//   [1, 2],
//   [3, 4],
// ];
// var arr2 = [
//   [3, 4],
//   [5, 6],
// ];
// //return answer = [[4,6],[8,10]]
// function solution(arr1, arr2) {
//   var answer = [];
//   for (
//     let i = 0;
//     i < arr1.length;
//     i++ //[1,2], [2,3] arr1[i]=[1,2]
//   ) {
//     let sum = [];
//     for (let j = 0; j < arr1[i].length; j++) {
//       sum.push(arr1[i][j] + arr2[i][j]);
//     }
//     answer.push(sum);
//   }
//   return answer;
// }

// console.log(solution(arr1, arr2));

// function solution(arr1, arr2) {
//   var answer = [];
//   // arr1 = [[1,2],[2,3]] arr2 = [[3,4],[5,6]] return [[4,6],[7,9]]

//   // 같은 인덱스의 값 더하기

//   for (let i = 0; i < arr1.length; i++) {
//     // [1, 2] [3, 4]
//     let sum = [];
//     for (let j = 0; j < arr1[i].length; j++) {
//       sum.push = arr1[i][j] + arr2[i][j];
//     }
//   }
// // }

let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];

function solution(arr1, arr2) {
  var answer = [];
  // 같은 인덱스의 값 더하기

  for (let i = 0; i < arr1.length; i++) {
    // [1, 2] [3, 4]
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(sum); //answer에 push(sum)을 할당해주고,
  }
  return answer; //불러와야함
}

console.log(solution(arr1, arr2));

//answer.push(sum)은 sum 변수에 담긴 값을 answer 배열의 마지막에 추가하는 역할을 합니다. 즉, 같은 인덱스의 값을 더해 sum 변수에 할당한 후, sum 변수에 담긴 값을 answer 배열에 추가하는 것입니다.

//예를 들어, arr1과 arr2의 첫 번째 배열 [1, 2]와 [3, 4]를 더하면 [4, 6]이 되는데, 이 값을 sum 변수에 할당합니다. 그리고 sum 변수에 담긴 값을 answer 배열의 마지막에 추가하기 위해 answer.push(sum)을 실행합니다.

//이후, 반복문이 다음 인덱스로 이동하여 두 번째 배열 [2, 3]와 [5, 6]를 더하고, sum 변수에 할당한 후, answer.push(sum)을 실행합니다. 이런식으로 모든 배열의 값을 더해 answer 배열에 추가하고, 마지막으로 answer 배열을 반환하여 정답을 출력합니다.
