function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (m*n !== original.length) return [];

    const res = [];
    for (let row = 0; row < m;row++) {
        res.push(original.slice(row*n,row*n+n));
    }

    return res;
};