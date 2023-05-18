import { undoableReducer } from "./undoableReducer.js";

undoableReducer({ past: [], present: undefined, future: [] }, { type: "" });

export function add(a: number, b: number) {
  return a + b;
}
