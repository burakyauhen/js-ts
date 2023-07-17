// https://www.codewars.com/kata/5887a6fe0cfe64850800161c/train/typescript

/*

Determine the area of the largest square that can fit inside a circle with radius r.

*/

export function areaLargestSquare(r: number): number {
    return Math.round((Math.sqrt(2) * r) ** 2);
  }