import { mathOperationExec } from "./mathOperationExec.js";
import { add } from "@ome/packageA";

describe("packageA", () => {
  it("returns the result of the math operation", () => {
    expect(mathOperationExec(1, 1, add)).toBe(2);
  });
});
