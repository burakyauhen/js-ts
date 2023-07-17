// https://www.codewars.com/kata/589519d1f0902e01af000054/train/typescript

/*

Perimeter sequence
The first three stages of a sequence are shown.

blocks

The blocksize is a by a and a ≥ 1.

What is the perimeter of the nth shape in the sequence (n ≥ 1) ?

*/

export function perimeterSequence(a: number,n: number): number {
    return n * (a * 4); 
}