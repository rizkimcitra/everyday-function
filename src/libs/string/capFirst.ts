/**
 * `capFirst` capitalizes the first letter of a string.
 * @param {string} str - string - the string to capitalize
 * @returns {string} - the string got capitalized on the first letter
 */
const capFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default capFirst
