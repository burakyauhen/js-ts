//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/typescript

/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint: 1 <= month <= 12
*/

export function quarterOf(month: number): number {
    let result: number;
      switch (month) { 
        case 1:
        case 2: 
        case 3:
            result = 1;
            break;
        case 4:
        case 5: 
        case 6:
            result = 2;
            break;
        case 7:
        case 8: 
        case 9:
            result = 3;
            break;
        case 10:
        case 11: 
        case 12:
            result = 4;
            break;
      }
      return result!;
    }