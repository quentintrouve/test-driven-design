// @ts-ignore
import memoize from "memoizee";

type Space = " ";

type Star = "*";

type Point = Space | Star;

type Row = Point[];

type Diamond = Row[];

export const print = (diamond: Diamond): string => {
  return diamond.map(printRow).join("\n");
};

const printRow = (row: Row): string => {
  return row.join("");
};

export const diamond = (dimension: number): Diamond => {
  const memoizedBuildRow = memoize(buildRow(dimension));
  return [...Array(dimension)].map((_, index) => memoizedBuildRow(computeTopHalfEquivalentIndex(dimension)(index)));
};

export const buildRow = (dimension: number) => (index: number): Row => {
  const numberOfStars = 1 + 2 * index;
  const numberOfSpacesOnEachSide = (dimension - numberOfStars) / 2;
  const stars = buildArrayOf<Star>(numberOfStars, "*");
  const spaces = buildArrayOf<Space>(numberOfSpacesOnEachSide, " ");
  return [...spaces, ...stars, ...spaces];
};

const buildArrayOf = <Character>(length: number, character: Character): Character[] => {
  return Array(length).fill(character);
};

export const computeTopHalfEquivalentIndex = (dimension: number) => (index: number): number => {
  if (index > (dimension - 1) / 2) {
    return dimension - 1 - index;
  }
  return index;
};