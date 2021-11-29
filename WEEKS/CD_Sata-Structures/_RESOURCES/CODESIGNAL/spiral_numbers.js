function spiralNumbers(n) {
  // Create row and col
  // to traverse rows and columns
  let row = 0,
    col = 0;
  let boundary = n - 1;
  let sizeLeft = n - 1;
  let flag = 1;
  // Variable to determine the movement
  // r = right, l = left, d = down, u = upper
  let move = 'r';
  // Array for matrix
  let matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill(0);
  }
  for (let i = 1; i < n * n + 1; i++) {
    // Assign the value
    matrix[row][col] = i;
    // switch-case to determine
    // the next index
    switch (move) {
      // If right, go right
      case 'r':
        col += 1;
        break;
      // If left, go left
      case 'l':
        col -= 1;
        break;
      // If up, go up
      case 'u':
        row -= 1;
        break;
      // If down, go down
      case 'd':
        row += 1;
        break;
    }
    // Check if the matrix
    // has reached array boundary
    if (i == boundary) {
      // Add the left size for the
      // next boundary
      boundary += sizeLeft;
      // If 2 rotations has been made,
      // decrease the size left by 1
      if (flag != 2) {
        flag = 2;
      } else {
        flag = 1;
        sizeLeft -= 1;
      }
      // switch-case to rotate the movement
      switch (move) {
        // If right, rotate to down
        case 'r':
          move = 'd';
          break;
        // If down, rotate to left
        case 'd':
          move = 'l';
          break;
        // If left, rotate to up
        case 'l':
          move = 'u';
          break;
        // If up, rotate to right
        case 'u':
          move = 'r';
          break;
      }
    }
  }
  return matrix;
}
