sum = require("../sum");

test("should work", () => {
  const result = sum(1,3);
  expect(result).toBe(4)
});

//console.log(document) // JSDOM implementation of the DOM to test headless. -- Turned off with testEnvironment inside package.json

