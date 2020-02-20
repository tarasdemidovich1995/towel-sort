
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length == 0 || matrix.length == 0) {
        return [];
    }
    let direction = 'fromLeftToRight';
    let newArr = [];
    for (let y = 0; y < matrix.length; y++) {
        if (direction == 'fromLeftToRight') {
            for (let x = 0; x < matrix[y].length; x++) {
                newArr.push(matrix[y][x]);
            }
            direction = 'fromRightToLeft';
        } else if (direction == 'fromRightToLeft') {
            for (let x = matrix[y].length - 1; x >= 0; x--) {
                newArr.push(matrix[y][x])
            }
            direction = 'fromLeftToRight';
        }
    }
    return newArr;
}
