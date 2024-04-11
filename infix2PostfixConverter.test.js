import { assert } from "chai";
import { toPostfix } from "./infix2PostfixConverter.js";

describe("Infix to Postfix",()=>{
  it("example tests",()=>{
    assert.equal( toPostfix("2+7"), "27+" );
    assert.equal( toPostfix("2+7*5"), "275*+" );
    assert.equal( toPostfix("3*3/(7+1)"), "33*71+/" );
    assert.equal( toPostfix("5+(6-2)*9+3^(7-1)"), "562-9*+371-^+" );
    assert.equal( toPostfix("(5-4-1)+9/5/2-7/1/7"), "54-1-95/2/+71/7/-" );
    assert.equal( toPostfix("1^2^3"), "123^^" );
  });
});