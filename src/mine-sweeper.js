const { NotImplementedError } = require('../extensions/index.js');

/**
* In the popular Minesweeper game you have a board with some mines and those cells
* that don't contain a mine have a number in it that indicates the total number of mines
* in the neighboring cells. Starting off with some arrangement of mines
* we want to create a Minesweeper game setup.
*
* @param {Array<Array>} matrix
* @return {Array<Array>}
*
* @example
* matrix = [
*  [true, false, false],
*  [false, true, false],
*  [false, false, false]
* ]
*
* The result should be following:
* [
*  [1, 2, 1],
*  [2, 1, 1],
*  [1, 1, 1]
* ]
*/

function getNeighbors(matrix, row, col) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const neighbors = [];
  
  const directions = [
    [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0],[1, 1]
  ];
  
  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;
    
    if (newRow >= 0 && newRow < rows && 
      newCol >= 0 && newCol < cols) {
        neighbors.push({
          value: matrix[newRow][newCol],
          row: newRow,
          col: newCol
        });
      }
    }
    
    return neighbors;
  }
  
  function minesweeper(matrix) {
    if (!matrix || !matrix.length) return [];
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    const result = Array.from({ length: rows }, () => Array(cols).fill(0));
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const neighbors = getNeighbors(matrix, i, j);
        result[i][j] = neighbors.filter(neighbor => neighbor.value === true).length;
      }
    }
    
    return result;
  }
  
  module.exports = {
    minesweeper
  };
  