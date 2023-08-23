//핸드폰 번호 가리기

var phone_number = "01088970807";

//우선 문자열을 **로 바꿔보자
function solution(phone_number) {
  var newArr =
    phone_number.slice(0, -4).replace(/./g, "*") + phone_number.slice(-4);
  //0부터 뒤에서 4자리 전까지 *로 바꾼것 +
  //뒤에서 4자리
  return newArr;
}
console.log(solution(phone_number));
