import { diamond, buildRow, print, computeTopHalfEquivalentIndex } from ".";

describe("Test of buildRow() function", function () {
  test("Dimension 1, middle line", function () {
    expect(buildRow(1)(0)).toEqual(["*"]);
  });

  test("Dimension 3, middle line", function () {
    expect(buildRow(3)(1)).toEqual(["*", "*", "*"]);
  });

  test("[Triangulation] Dimension 5, middle line", function () {
    expect(buildRow(5)(2)).toEqual(["*", "*", "*", "*", "*"]);
  });

  test("Dimension 3, intermediary line", function () {
    expect(buildRow(3)(0)).toEqual([" ", "*", " "]);
  });

  test("[Triangulation] Dimension 5, intermediary line", function () {
    expect(buildRow(5)(1)).toEqual([" ", "*", "*", "*", " "]);
  });

  test("Dimension 5, first line", function () {
    expect(buildRow(5)(0)).toEqual([" ", " ", "*", " ", " "]);
  });
});

describe("Test of computeTopHalfEquivalentIndex() function", function () {
  test("Above the intermediary line, should return the same index", function () {
    expect(computeTopHalfEquivalentIndex(5)(0)).toEqual(0);
  });

  test("Above the intermediary line, should return the same index", function () {
    expect(computeTopHalfEquivalentIndex(5)(1)).toEqual(1);
  });

  test("On the intermediary line, should return the same index", function () {
    expect(computeTopHalfEquivalentIndex(5)(2)).toEqual(2);
  });

  test("Under the intermediary line, should return the equivalent index", function () {
    expect(computeTopHalfEquivalentIndex(5)(4)).toEqual(0);
  });

  test("Under the intermediary line, should return the equivalent index", function () {
    expect(computeTopHalfEquivalentIndex(5)(3)).toEqual(1);
  });
});

describe("Test of diamond() function", function () {
  test("Dimension 1", function () {
    expect(diamond(1)).toEqual([["*"]]);
  });

  test("Dimension 3", function () {
    expect(diamond(3)).toEqual([
      [" ", "*", " "],
      ["*", "*", "*"],
      [" ", "*", " "],
    ]);
  });

  test("[Triangulation] Dimension 5", function () {
    expect(diamond(5)).toEqual([
      [" ", " ", "*", " ", " "],
      [" ", "*", "*", "*", " "],
      ["*", "*", "*", "*", "*"],
      [" ", "*", "*", "*", " "],
      [" ", " ", "*", " ", " "],
    ]);
  });
});

describe("Test of print() function", function () {
  test("Dimension 1", function () {
    const diamond1 = diamond(1);
    expect(print(diamond1)).toEqual("*");
  });

  test("Dimension 3", function () {
    const diamond3 = diamond(3);
    expect(print(diamond3)).toEqual(` * 
***
 * `);
  });

  test("[Control] Dimension 5", function () {
    const diamond5 = diamond(5);
    expect(print(diamond5)).toEqual(`  *  
 *** 
*****
 *** 
  *  `);
  });
});
