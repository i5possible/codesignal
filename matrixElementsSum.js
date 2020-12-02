function matrixElementsSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] !== 0) {
                sum += matrix[j][i];
            } else {
                break;
            }
        }
    }
    return sum;
}

/*
matrix = [[0, 1, 1, 2],
          [0, 5, 0, 0],
          [2, 0, 3, 3]]

          output = 9
*/
