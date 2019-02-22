// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

function solution(A, K) {
    let len = A.length;
    if(len == K) return A;
    
    if(K > len) K = K%len;
    
    let start = A.slice(0, len - K);	
    let end = A.slice(len -K , len);	
    
    return end.concat(start);
}
console.log(solution([3, 8, 9, 7, 6], 6));
