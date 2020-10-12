/**
 * arrayExtension module.
 *
 * @module src/arrayExtension
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
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
  if (!Array.isArray(source)) {
    throw new TypeError('Hey! The source paramater must be an Array.')
  }
  const arrayCopy = Array.from(source)
  arrayCopy.sort((a, b) => a - b)

  return arrayCopy
}

/**
 * Returns a numerically sorted copy (descending order) of an array.
 *
 * @param {number[]} source - The array to create a sorted copy of.
 * @throws {TypeError} The source parameter must be an Array.
 * @returns {number[]} A sorted copy (descending order) of the source array.
 */
export function immutableSortDescending (source) {
  if (!Array.isArray(source)) {
    throw new TypeError('Hey! The source paramater must be an Array.')
  }
  const arrayCopy = Array.from(source)
  arrayCopy.sort((a, b) => b - a)

  return arrayCopy
}
