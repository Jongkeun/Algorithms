//https://app.codility.com/programmers/lessons/1-iterations/

function solution(N) {
    let bin = N.toString(2);
    let maxPeriod = 0;
    let oneIndex = 0;

    for (let i = 1; i< bin.length; i++){
        if(bin[i] == 1){
            if(i - oneIndex > maxPeriod) {
                maxPeriod = i - oneIndex;
            }
            oneIndex = i;
        }
    }

    return maxPeriod == 0 ? 0 : maxPeriod - 1;
}

console.log(solution(529));
