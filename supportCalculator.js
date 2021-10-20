// Retrieved from NAV's website
const BASE_AMOUNT = 106399; // Grunnbeløp

const yearlyWorkDays = 260;

// Function for calculating the average of the elements of an array
const average = (array) => {
  return array.length > 0 ? array.reduce((a, b) => a + b) / array.length : 0;
};

// Function for checking if the user has the right to receive support
const userHasRightToSupport = (income1, income2, income3) => {
  /* Checking that the user had an income last year and that either
  the last income is over 1.5G or the sum of the three last years is 
  over 3G  */
  return (
    (income3 > BASE_AMOUNT * 1.5 ||
      income1 + income2 + income3 > BASE_AMOUNT * 3) &&
    income3 > 0
  );
};

const supportCalculator = (income1, income2, income3) => {
  // Checking if the user has the right to receive support
  if (!userHasRightToSupport(income1, income2, income3)) {
    return 0;
  }

  // Finding the basis for support (dagpengegrunnlaget)
  let supportBasis = Math.max(
    income3,
    average(Array.of(income1, income2, income3))
  );

  // Capping the supportBasis to 6G
  supportBasis = Math.min(6 * BASE_AMOUNT, supportBasis);

  // Rounding the amount up
  return Math.ceil(supportBasis / yearlyWorkDays);
};

module.exports = {
  average,
  supportCalculator,
  userHasRightToSupport,
  BASE_AMOUNT,
};
