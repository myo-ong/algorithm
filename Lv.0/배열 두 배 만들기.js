function solution(numbers) {
    const arr = [];
    for (let i=0; i<=numbers.length-1; i++) {
        arr.push(numbers[i]*2)
    }
    return arr;
}