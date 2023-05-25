/**
 *
 * @param {number} number set number convert to USD.
 * @returns converted number string.
 * @example toCurrency(12345) => '$12345.00';
 */
export const toCurrency = (number) => {
  const def = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "usd",
  });
  return def.format(number);
};
