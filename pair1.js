//정수 n(별 갯수), m(라인 갯수)로 직사각형 별 만들기
const star = [];
for (let line = 0; line < 3; line++) {
  for (let i = 0; i < 5; i++) {
    star.push("*");
  }
  star.push("\n");
}
console.log(star.join("")); //문자화시킴
