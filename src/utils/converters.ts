/**
 * Converts a number into a financial format, rounding to 2 decimals unless the number is less than a penny.
 * @param {number} num - The number to be converted.
 * @returns {string} - The formatted financial number as a string.
 */
const toFinancialNumber = (num: number): string => {
  if (Math.abs(num) >= 0.01) {
    return `$${num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
  }
  return `$${num.toString()}`
}

export { toFinancialNumber }
