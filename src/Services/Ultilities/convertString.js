/**
 *
 * @param {string} str Set text
 * @returns array of spited text
 */
export const convertSlashToArray = (str) => {
  const arr = str.split("/");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      arr.splice(i, 1);
    }
  }
  return arr;
};
/**
 *
 * @param {string} str set text
 * @returns string
 */
export const convertSpacetoDash = (str) => str.replaceAll(" ", "-");
/**
 *
 * @param {string} str set text
 * @returns string
 */
export const convertDashToSpace = (str) => str.replaceAll("-", " ");
/**
 *
 * @param {string} text Set text to format
 * @returns text
 */
export const formatText = (text) => {
  const pattern = /(?<=(\?|\.)\s)[a-zA-Z]/g;
  return text.replace(pattern, (c) => c.toUpperCase());
};
const convertString = {
  convertDashToSpace,
  convertSpacetoDash,
  convertSlashToArray,
  formatText,
};
export default convertString;
