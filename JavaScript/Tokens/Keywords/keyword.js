//! 1. Core Reserved Words (34)
//? These are permanently locked. You can never, ever use them for anything else.

// break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, function, if, import, in, instanceof, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield, using

//! 2. Strict Mode & Module Restrictions (9)
//? These became restricted in modern JavaScript to make the code safer and to prepare for future features.

// implements, interface, let, package, private, protected, public, static, arguments (restricted in strict contexts)


//! 3. Contextual Keywords & Built-in Literals (~20+)
//? This is where the count reaches 64. These words act exactly like keywords in specific contexts, or they are protected values that you cannot reassign:

// Contextual: async, await, get, set, of, from, as, target

// Future Proofing: enum

// Protected Literals: true, false, null, undefined, NaN, Infinity





//! As mentioned earlier, modern JavaScript has roughly 64 keywords in total depending on how they are grouped.