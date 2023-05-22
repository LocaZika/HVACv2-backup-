/**
 *
 * @param {number} number set number convert to USD.
 * @returns converted number string.
 * @example toCurrency(12345) => '$12345.00';
 */
export const toCurrency = (number) =>
  Intl.NumberFormat("en-us", {
    style: "currency",
    currency: number,
  });
