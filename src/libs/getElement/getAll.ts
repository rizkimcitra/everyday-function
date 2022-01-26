/**
 * `getAll` is a function that takes an element as a string and returns a NodeList of all the elements
 * that match the element string.
 * @param {string} element - string
 * @returns A NodeList
 */
const getAll = (element: string) => {
  if (element.startsWith('#')) {
    throw new ReferenceError('Element must be a string that does not starts with a #\ngiven element: ' + element)
  }
  return document.querySelectorAll(element)
}

export default getAll
