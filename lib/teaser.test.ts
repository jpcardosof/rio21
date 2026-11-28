import { test } from "node:test";
import assert from "node:assert/strict";
import { teaserPrograms } from "./teaser.ts";
import { methodPt } from "../content/curriculum.pt.ts";

test("classes without a timetable slot (Feminino) stay off the homepage teaser", () => {
  assert.deepEqual(
    teaserPrograms(methodPt.programs).map((program) => program.id),
    ["miniKids", "kids", "beginners", "advanced"]
  );
});
