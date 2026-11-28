import { test } from "node:test";
import assert from "node:assert/strict";
import { navHref } from "./links.ts";

test("on the homepage section anchors stay as hashes", () => {
  assert.equal(navHref("#horario", ""), "#horario");
});

test("on another page section anchors point back to the homepage of that language", () => {
  assert.equal(navHref("#horario", "/"), "/#horario");
  assert.equal(navHref("#horario", "/en"), "/en#horario");
});

test("page links are left untouched", () => {
  assert.equal(navHref("/metodo", "/"), "/metodo");
  assert.equal(navHref("/en/method", ""), "/en/method");
});
