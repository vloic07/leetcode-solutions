function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (m*n !== original.length) return [];

    const res = [];
    
    for (let row = 0; row < m;row++) {
        res.push([]);
        for (let j = n*row;j<n*row+n;j++) {
            res[row].push(original[j]);
        }
    }
    
    return res;
};