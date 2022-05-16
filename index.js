const file1 = require('./utilities/file-1')
const { sum, concat } = require('./utilities/file-2')

// File 1

// find the largest number in an array
console.log(file1.largeNumber([102,4,5]))

// remove the 3rd item from array
console.log(file1.cut3([2,3,4]))

// File 2

// add numbers in an array
console.log(sum([2,50,67,80]))

  // concatenate two arrays
console.log(concat([3,5,6],[2,4,56]))