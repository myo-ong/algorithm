function solution(array) {
    return array.sort((acc,cur) => acc-cur)[~~(array.length/2)];
}

function solution(array) {
     return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}