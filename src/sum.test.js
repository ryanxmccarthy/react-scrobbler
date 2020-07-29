const sum = require("./sum");

test("sum", () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(1, 6)).toBe(7);
});
