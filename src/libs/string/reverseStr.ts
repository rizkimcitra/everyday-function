/**
 * A function that reverses a string and returns the reversed string.
 * @param {string} str - string
 * @returns The reversed string.
 */
const reverseStr = (str: string): string => {
  return str.split('').reverse().join('')
}

export default reverseStr
