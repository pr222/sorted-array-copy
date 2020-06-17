/**
 * arrayExtension module.
 *
 * @module src/arrayExtension
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellen Nu <en999zz@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns a numerically sorted copy of an array.
 *
 * @param {number[]} source - The array to create a sorted copy of.
 * @throws {TypeError} The source parameter must be an Array.
 * @returns {number[]} A sorted copy of the source array.
 */
export function immutableSort (source) {
  // Is it an array?
  if (!Array.isArray(source)) {
    throw new TypeError('The argument must be an array.')
  }

  // Make a copy of the source array to avoid side effects.
  const copy = Array.from(source)

  // Sort the copy numerically.
  copy.sort(function (a, b) {
    return a - b
  })

  // Return the copy.
  return copy
}

/**
 * Returns a numerically sorted copy (descending order) of an array.
 *
 * @param {number[]} source - The array to create a sorted copy of.
 * @throws {TypeError} The source parameter must be an Array.
 * @returns {number[]} A sorted copy (descending order) of the source array.
 */
export function immutableSortDescending (source) {
  // Is it an array?
  if (!Array.isArray(source)) {
    throw new TypeError('The argument must be an array.')
  }

  // Make a copy of the source array, sort the copy numerically and return the copy.
  return Array.from(source).sort((a, b) => b - a)

  // // ALTERNATIVE SOLUTION
  // // Using Array#slice and Array#sort with a function declaration.
  // return source
  //   .slice()
  //   .sort(function (a, b) {
  //     return b - a
  //   })
}
