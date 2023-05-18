import undoable from "redux-undo";

// @ts-expect-error
export const undoableReducer = undoable.default(() => {}, {
  limit: 20,
});
