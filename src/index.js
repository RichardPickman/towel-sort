module.exports = function towelSort (matrix) {
  const result = [];

  if (arguments.length === 0) return result
  matrix.map((arr, index) => (index % 2 > 0) ? arr.reverse().forEach(num => result.push(num)) : arr.forEach(num => result.push(num)))

  return result
}
