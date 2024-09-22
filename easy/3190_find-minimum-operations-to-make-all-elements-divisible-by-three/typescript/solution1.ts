function minimumOperations(nums: number[]): number {
    let numberOfOperations: number = 0;
    for (const num of nums) {
        if (num%3 !== 0) numberOfOperations++;
    }
    return numberOfOperations;
};