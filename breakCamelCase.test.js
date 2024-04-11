import { assert } from "chai";
import { solution } from "./breakCamelCase.js"

it("example tests", () => {
  assert.strictEqual(solution(""), "");
  assert.strictEqual(solution("camelCasing"), "camel Casing");
  assert.strictEqual(solution("camelCasingTest"), "camel Casing Test");
});