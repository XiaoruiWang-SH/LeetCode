var get_char = function (s, index) {
  if (index < s.length) {
    return s[index];
  } else {
    return null;
  }
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/**
 * 
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const block_len = 2 * numRows - 2;
  const c = Math.floor(s.length / block_len);
  const r = s.length % block_len;
  let columns = 0;
  if (r <= numRows) {
    columns = c * (numRows - 1) + 1;
  } else {
    columns = c * (numRows - 1) + r - numRows + 1;
  }

  // const arr = Array.from({ length: rows }).map(() => new Array(columns));
  const arr = new Array(numRows).fill(null).map(() => new Array(columns));
  let char_index = 0;
  for (let column = 0; column < columns; ++column) {
    for (let row = 0; row < numRows; ++row) {
      if (column === 0 || column % (numRows - 1) === 0) {
        const char = get_char(s, char_index);
        if (char) {
          arr[row][column] = char;
          ++char_index;
        } else {
          break;
        }
      } else if (row === numRows - (column % (numRows - 1)) - 1) {
        const char = get_char(s, char_index);
        if (char) {
          arr[row][column] = char;
          ++char_index;
        } else {
          break;
        }
      }
    }
  }
  const result = [];
  for (let row = 0; row < numRows; ++row) {
    console.log(arr[row]);
    for (let column = 0; column < columns; ++column) {
      if (arr[row][column]) {
        result.push(arr[row][column]);
      }
    }
  }
  return result.join('');
};

 */

/**
 * Using d (1, -1) reprensent down and up, just append char to row[]
 * @param {*} s
 * @param {*} numRows
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) {
    return s;
  }
  let d = 1,
    idx = 0;
  let arr = new Array(numRows).fill(null).map(() => []);
  for (char of s) {
    arr[idx].push(char);
    if (idx === 0) {
      d = 1;
    } else if (idx === numRows - 1) {
      d = -1;
    }
    idx += d;
  }
  for (let i = 0; i < numRows; ++i) {
    arr[i] = arr[i].join('');
  }
  return arr.join('');
};

const result = convert('PAYPALISHIRING', 4);
console.log(result);
