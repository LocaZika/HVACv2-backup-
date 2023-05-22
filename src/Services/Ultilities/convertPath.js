/**
 *
 * @param {string} currentPath Set current path
 * @returns array of current paths
 */
export const convertPath = (currentPath) => currentPath.split("/");
export const convertUrl = (url) => url.replace(" ", "-");
