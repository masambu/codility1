function solution(A){
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
    }
    return sum - (12*5);
}
let A = [100,100,100,-10]
console.log(solution(A))