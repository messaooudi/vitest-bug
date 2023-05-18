import { undoableReducer } from "./undoableReducer.js";

undoableReducer();

export function add(a: number, b: number) {
  return a + b;
}
