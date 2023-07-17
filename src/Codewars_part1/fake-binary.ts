// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

/*

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/

export const fakeBin = (x:string):string => {
    return x.split('').map((item: string): string => {
       return (Number(item) < 5) ? item = '0' : item = '1';
     }).join('');
};