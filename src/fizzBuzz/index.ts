const isMultipleOf = (m: number) => (n: number): boolean => n % m === 0;

export function internal(n: number): string {
  let result = "";

  if (isMultipleOf(3)(n)) {
    result += "Fizz";
  }

  if (isMultipleOf(5)(n)) {
    result += "Buzz";
  }

  return result || n.toString();
}

export function FizzBuzz(n: number): string[] {
  return [...Array(n)].map((_, i) => i + 1).map(internal);
}
