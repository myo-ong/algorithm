function solution(denum1, num1, denum2, num2) {
  // 분자
  let topNum = num1 * denum2 + num2 * denum1;
  // 분모
  let botNum = num1 * num2;
  // 최소 공배수
  let maximum = 1;
  // 약분
  for (let i = 1; i <= topNum; i++) {
    if (topNum % i === 0 && botNum % i === 0) {
      maximum = i;
    }
  }
  return [topNum / maximum, botNum / maximum];
}

function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}
