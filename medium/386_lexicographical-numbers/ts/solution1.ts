function lexicalOrder(n: number): number[] {
    const res = [];

    for (let i = 1 ; i <=9; i++) {
        dfs(i, n, res);
    }

    return res;
};

function dfs(current: number, limit: number, result: number[]): void {
    if (current > limit) return;

    result.push(current);

    for (let i = 0; i <= 9; i++) {
        dfs(current*10+i, limit,result);
    }
}
    