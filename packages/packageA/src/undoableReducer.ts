import undoable from "redux-undo";

export const undoableReducer = undoable(() => {}, {
  limit: 20,
});
