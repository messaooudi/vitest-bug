import { add } from "./add.js";

describe("packageA", () => {
  it("returns the addition of two numbers", () => {
    expect(add(1, 1)).toBe(2);
  });
});
