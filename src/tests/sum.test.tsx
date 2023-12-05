import "@testing-library/jest-dom";
import sum from "../utils/sum";

test("Sum function", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
