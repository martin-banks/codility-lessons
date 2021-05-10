// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

const args = process.argv.slice(2)

// slice the array into 2 new arrays
// from the amount to the end and and beginning to the amount

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const data = [1, 1, 2, 3, 5]

function rotation (arr, amount) {
  const { length } = arr
  let count = amount
  if (amount > length) {
    // amount to be rotated could be more than the length of the array
    // could also be multiple times the length of the array
    // initial thought was to subtract but doesn't account for massive rotations
    // innstead the remainder will give the correct value over the length of the array
    count = amount % length
  }

  const output = [arr.slice(length - count), arr.slice(0, length - count)]

  console.log(data)
  console.log(output)

}

rotation(data, args[0])
