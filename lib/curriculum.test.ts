import { test } from "node:test";
import assert from "node:assert/strict";
import { methodPt } from "../content/curriculum.pt.ts";
import { methodEn } from "../content/curriculum.en.ts";

for (const [name, dict] of [
  ["pt", methodPt],
  ["en", methodEn]
] as const) {
  test(`${name}: programs in the agreed order`, () => {
    assert.deepEqual(
      dict.programs.map((program) => program.id),
      ["miniKids", "kids", "beginners", "advanced", "women"]
    );
  });

  test(`${name}: 16-week cycles and an 8-week women's cycle`, () => {
    assert.deepEqual(
      dict.programs.map((program) => program.weeks.length),
      [16, 16, 16, 16, 8]
    );
  });

  test(`${name}: every week has a headline and content`, () => {
    for (const program of dict.programs) {
      program.weeks.forEach((week, index) => {
        assert.ok(week.headline.trim(), `${program.id} week ${index + 1} headline`);
        assert.ok(week.blocks.length > 0, `${program.id} week ${index + 1} blocks`);
        for (const block of week.blocks) assert.ok(block.detail.trim(), `${program.id} week ${index + 1} ${block.label}`);
      });
    }
  });

  test(`${name}: five value grades`, () => {
    assert.equal(dict.values.grades.length, 5);
    for (const grade of dict.values.grades) assert.equal(grade.points.length, 3);
  });

  test(`${name}: no em dash in any text`, () => {
    assert.ok(!JSON.stringify(dict).includes("—"));
  });
}

test("pt and en have the same week structure", () => {
  methodPt.programs.forEach((program, p) => {
    program.weeks.forEach((week, w) => {
      assert.equal(week.blocks.length, methodEn.programs[p].weeks[w].blocks.length, `${program.id} week ${w + 1}`);
    });
  });
});
