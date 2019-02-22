// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

function solution(A) {
    let map = new Map();
    A.forEach((value, index) => {
        if(map.has(value)) {
            map.delete(value);
        } else {
            map.set(value,index);
        }
    });

    return map.keys().next().value;
}