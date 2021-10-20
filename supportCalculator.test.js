const {
  average,
  userHasRightToSupport,
  supportCalculator,
  BASE_AMOUNT,
} = require("./supportCalculator");

// Testing average function
test("Finding the average of a list", () => {
  let numberList = [1, 2, 3, 4, 5];
  expect(average(numberList)).toBe(3);
});

test("Finding the average of an empty list", () => {
  let numberList = [];
  expect(average(numberList)).toBe(0);
});

test("Finding the average of a list with negative numbers", () => {
  let numberList = [-5, -3, -7, -9];
  expect(average(numberList)).toBe(-6);
});

test("Finding the average of a list with one element", () => {
  let numberList = [7];
  expect(average(numberList)).toBe(7);
});

// Testing the userHasRightToSupport function
test("Checking if user gets support with low income", () => {
  expect(
    userHasRightToSupport(BASE_AMOUNT / 2, BASE_AMOUNT / 2, BASE_AMOUNT / 2)
  ).toBe(false);
});

test("Checking if user gets support with high income", () => {
  expect(
    userHasRightToSupport(BASE_AMOUNT * 4, BASE_AMOUNT * 4, BASE_AMOUNT * 4)
  ).toBe(true);
});

test("Checking if the user gets support with high income last year, but low income earlier", () => {
  expect(userHasRightToSupport(0, 0, BASE_AMOUNT * 1.9)).toBe(true);
});

test("Checking if the user gets support with high total income, but no income last year", () => {
  expect(userHasRightToSupport(BASE_AMOUNT * 4, BASE_AMOUNT * 4, 0)).toBe(
    false
  );
});

test("Checking if the user gets support with high total income, but low income last year", () => {
  expect(userHasRightToSupport(BASE_AMOUNT * 4, BASE_AMOUNT * 4, 1)).toBe(true);
});

test("Checking if the user gets support with total just below 3G", () => {
  expect(userHasRightToSupport(BASE_AMOUNT, BASE_AMOUNT, BASE_AMOUNT - 1)).toBe(
    false
  );
});

test("Checking if the user gets support with total exactly 3G", () => {
  expect(userHasRightToSupport(BASE_AMOUNT, BASE_AMOUNT, BASE_AMOUNT)).toBe(
    false
  );
});

test("Checking if the user gets support with total just above 3G", () => {
  expect(userHasRightToSupport(BASE_AMOUNT, BASE_AMOUNT, BASE_AMOUNT + 1)).toBe(
    true
  );
});

test("Checking if the user gets support with just above 1.5G last year", () => {
  expect(userHasRightToSupport(0, 0, BASE_AMOUNT * 1.5 + 1)).toBe(true);
});

test("Checking if the user gets support with just below 1.5G last year", () => {
  expect(userHasRightToSupport(0, 0, BASE_AMOUNT * 1.5 - 1)).toBe(false);
});

// Testing the supportCalculator function
// NOTE: For most of these I'm assuming a BASE_AMOUNT of 106399 for simplicity
test("Checking if the example in the assignment gives the correct output", () => {
  expect(supportCalculator(400000, 450000, 500000)).toBe(1924);
});

test("Checking if user has no right then zero is returned", () => {
  expect(supportCalculator(BASE_AMOUNT, BASE_AMOUNT, BASE_AMOUNT)).toBe(0);
});

test("Checking if user has higher last year income than average, his income is calculated by last year", () => {
  expect(supportCalculator(100000, 100000, 200000)).toBe(770);
});

test("Checking if user has higher average income than last year, his income is calculated by average", () => {
  expect(supportCalculator(800000, 200000, 100000)).toBe(1411);
});

test("Checking if user has over 6G average, then 6G is used", () => {
  expect(supportCalculator(800000, 800000, 800000)).toBe(2456);
});

// The above tests also implicitly test whether the rounding up work
