function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;

    const strings = Array(numRows).fill("");
    
    let currentRow = 0;
    let direction: 'UP' | 'DOWN' = 'DOWN';
    for (const c of s) {
        strings[currentRow]+=c;
        if (direction === 'DOWN') {
            currentRow++;
        } else {
            currentRow--;
        }
        if (currentRow === 0) {
            direction = 'DOWN';
        }
        if (currentRow === numRows - 1) {
            direction = 'UP'
        }
    }

    return strings.join('');
};