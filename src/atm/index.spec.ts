// test

// @ts-ignore see https://github.com/jest-community/jest-extended#setup
// import * as matchers from "jest-extended"
import cashBack from "./ITM/index"
// expect.extend(matchers)

it("Single bill of 200", function () {
  const amount = 200

  const actual = cashBack(amount)
  console.log(actual);
  
  const expected = {
    '500': 0,
    '200': 1,
    '100': 0,
    '50': 0,
    '20': 0,
    '10': 0
}

  expect(actual).toEqual(expected)
})

it("Single bill of 500", function () {
  const amount = 500

  const actual = cashBack(amount)

  const expected = {
    '500': 1,
    '200': 0,
    '100': 0,
    '50': 0,
    '20': 0,
    '10': 0
}

  expect(actual).toEqual(expected)
})

it("Two bills of 200", function () {
  const amount = 400

  const actual = cashBack(amount)

  const expected = {
    '500': 0,
    '200': 2,
    '100': 0,
    '50': 0,
    '20': 0,
    '10': 0
}

  expect(actual).toEqual(expected)
})

it("Two different bills", function () {
  const amount = 30

  const actual = cashBack(amount)

  const expected = {
    '500': 0,
    '200': 0,
    '100': 0,
    '50': 0,
    '20': 1,
    '10': 1
}

  expect(actual).toEqual(expected)
})

it("Two bills, one of 500 and one of 200", function () {
  const amount = 14560

  const actual = cashBack(amount)

  const expected = { '10': 1, '20': 0, '50': 1, '100': 0, '200': 0, '500': 29 }

  expect(actual).toEqual(expected)
})