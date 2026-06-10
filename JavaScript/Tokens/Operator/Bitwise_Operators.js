//! Bitwise operators work directly on the binary (0 and 1) representation of numbers.

// | Operator | Name                 | Example   | Result   |     |
// | -------- | -------------------- | --------- | -------- | --- |
// | `&`      | AND                  | `5 & 3`   | `1`      |     |
// | `        | `                    | OR        | `5 \| 3` | `7` |
// | `^`      | XOR                  | `5 ^ 3`   | `6`      |     |
// | `~`      | NOT                  | `~5`      | `-6`     |     |
// | `<<`     | Left Shift           | `5 << 1`  | `10`     |     |
// | `>>`     | Right Shift          | `8 >> 1`  | `4`      |     |
// | `>>>`    | Unsigned Right Shift | `8 >>> 1` | `4`      |     |




// Quick Notes
// & → Both bits must be 1
// | → At least one bit is 1
// ^ → Bits are different
// ~ → Reverse all bits
// << → Shift left (multiply by 2)
// >> → Shift right (divide by 2)
// >>> → Unsigned right shift


// Example
console.log(5 & 3);  // 1
console.log(5 | 3);  // 7
console.log(5 ^ 3);  // 6

// Remember: Bitwise operators work on binary values, not normal decimal numbers.