// https://www.codewars.com/kata/5a023c426975981341000014/train/typescript


/*

You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle

*/

export const otherAngle = (a: number, b: number): number => {
    return 180 - a - b;
}