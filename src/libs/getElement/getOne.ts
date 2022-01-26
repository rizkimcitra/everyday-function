/**
 * Get the element with the given string.
 * @description - start with # to get the id | start with . to get the classname
 * @param {string} element - string
 */
const getOne = (element: string) => document.querySelector(element)

export default getOne
