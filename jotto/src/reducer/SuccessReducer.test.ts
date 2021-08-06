import { actionTypes } from "../action";
import { success } from "./SuccessReducer";

test("when previous state is undefined, return false", () => {
  const newState = success(undefined, { type: "unknown" });
  expect(newState).toBe(false);
});

test("return previous state then unknown action type", () => {
  const newState = success(false, { type: "unknown" });
  expect(newState).toBe(false);
});

test("return `true`for action type CORRECT_GUESS", () => {
  const newState = success(false, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});
