import { test } from "node:test";
import assert from "node:assert/strict";
import { selectedWeek } from "./week-selection.ts";

test("with nothing picked the current week is shown", () => {
  assert.equal(selectedWeek(null, 2, 16), 2);
});

test("a picked week inside the cycle is shown", () => {
  assert.equal(selectedWeek(12, 2, 16), 12);
});

test("a week picked in a 16-week class never overflows an 8-week class", () => {
  // e.g. week 12 picked in Iniciantes, then the Feminino tab (8 weeks) is opened
  assert.equal(selectedWeek(12, 1, 8), 1);
});
