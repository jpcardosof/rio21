import { test } from "node:test";
import assert from "node:assert/strict";
import { cycleWeek } from "./cycle.ts";

const START = "2026-11-16";

test("Saturday 28 Nov 2026 is the last day of week 2", () => {
  assert.equal(cycleWeek(new Date("2026-11-28T12:00:00Z"), START, 16), 2);
});

test("week changes at Monday midnight in Lisbon (winter time)", () => {
  assert.equal(cycleWeek(new Date("2026-11-22T23:30:00Z"), START, 16), 1); // Sun 23:30 WET
  assert.equal(cycleWeek(new Date("2026-11-23T00:10:00Z"), START, 16), 2); // Mon 00:10 WET
});

test("after the last week the cycle returns to week 1", () => {
  assert.equal(cycleWeek(new Date("2027-03-08T10:00:00Z"), START, 16), 1); // week 17
});

test("the 8-week cycle wraps independently of the 16-week one", () => {
  const monday = new Date("2027-01-11T10:00:00Z"); // week 9 since start
  assert.equal(cycleWeek(monday, START, 16), 9);
  assert.equal(cycleWeek(monday, START, 8), 1);
});

test("week changes at Monday midnight in Lisbon on the summer-time weekend", () => {
  // 2027-03-28 is the DST change day; Sun 29 Mar 23:30 WEST = 22:30 UTC
  const sunday = cycleWeek(new Date("2027-04-04T22:30:00Z"), START, 16); // Sun 4 Apr 23:30 WEST
  const monday = cycleWeek(new Date("2027-04-04T23:10:00Z"), START, 16); // Mon 5 Apr 00:10 WEST
  assert.equal(monday, (sunday % 16) + 1);
  assert.equal(cycleWeek(new Date("2027-03-28T22:30:00Z"), START, 16), cycleWeek(new Date("2027-03-28T10:00:00Z"), START, 16));
});

test("dates before the start still map into the cycle", () => {
  assert.equal(cycleWeek(new Date("2026-11-15T12:00:00Z"), START, 16), 16);
});

test("years later it is still a valid week", () => {
  const week = cycleWeek(new Date("2031-06-18T09:00:00Z"), START, 16);
  assert.ok(week >= 1 && week <= 16);
});
