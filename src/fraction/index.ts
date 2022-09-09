import { gcd as computeGCD } from "./gcd";

export interface Fraction {
  numerator: number;
  denominator: number;
}

export function createFraction(numerator: number, denominator: number): Fraction {
  if (!denominator) {
    throw Error("Denominator can't be null.");
  }
  return {
    numerator,
    denominator
  };
}

export function add(f1: Fraction, f2: Fraction): Fraction {
  const f1bis = scaleUp(f1, f2.denominator);
  const f2bis = scaleUp(f2, f1.denominator);
  return reduce(addFractionsWithSameDenominator(f1bis, f2bis));
}

function scaleUp({ numerator, denominator }: Fraction, factor: number): Fraction {
  return createFraction(numerator * factor, denominator * factor);
}

function scaleDown({ numerator, denominator }: Fraction, factor: number): Fraction {
  return createFraction(numerator / factor, denominator / factor);
}

function reduce(fraction: Fraction): Fraction {
  const { numerator, denominator } = fraction;
  const gcd = computeGCD(numerator, denominator);
  return scaleDown(fraction, gcd);
}

function addFractionsWithSameDenominator(f1: Fraction, f2: Fraction): Fraction {
  return createFraction(f1.numerator + f2.numerator, f1.denominator);
}