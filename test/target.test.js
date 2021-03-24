import { Target } from "../src/Target";

describe("Target class", () => {
  let testTarget;
  beforeEach(() => {
    testTarget = new Target();
  });
  test("Target should by 4500 by default", () => {
    expect(testTarget.showTarget()).toBe(4500);
  });
  test("5000 steps should pass default target", () => {
    expect(testTarget.isReached(5000, 5)).toEqual(true);
  });
  test("4999 steps should pass default target", () => {
    expect(testTarget.isReached(4999)).toEqual(false);
  });
  test("Target should be 400 when set", () => {
    testTarget = new Target(400);
    expect(testTarget.showTarget()).toBe(400);
  });
});
