# Javascript Basics
## Contents
 * [Comments](./#comments)
 * [Variables](./#variables)
 * [Constants](./#constants)
 * [Datatypes](./#datatypes)

## Comments
**NB:** You will be marked on your comments in the leaving cert


Comments are a way of describing your code without the machine executing it
Comments can be divided into two types:

**Single-line:**
Single line comments can only span across one line and are denoted by a `//`
*example:*
```js
// This is a single line comment
```

Single line comments can also be written after code


*example:*
```js
console.log("Hello, World!"); // a single-line comment after some code
```
**Multi-line**
Multi line comments can span across multiple lines and start with a `/*` and end with a `*/`


*example:*
```js
/* This 
is a multi-line
comment */
```
They can also go after code

```js
console.log("Hello, World!"); /* A multi-line
comment after
some code */
```

## Variables
A variable is a box in which data can be stored, they can be initialised with and without data.
There are two ways to declare variables in javascript
using the `var` keyword and the `let` keyword.

All variable names in javascript must begin with a letter or an underscore,
you cannot name a variable that starts with a number.

You also may not use a reserved word as a variable.

A list of resereved words can be found [here](https://www.w3schools.com/js/js_reserved.asp)

It is best practice to define variables in camelCase, by capitalising the second letter of each word

The `var` keyword defines a variable in the current scope, but we needn't worry about that now.

*using var with no initial value*
```js
var variableName;
```

*using var with an initial value*
```js
var variableName = 10;
```
The `let` keyword defines a variable in the global scope, again don't worry about that now.

*using let with no initial value*
```js
let variableName;
```

*using let with an initial value*
```js
let variableName = 10;
```

## Constants
A constant is like a variable except for the fact it cannot be changed.
constants are declared using the `const` keyword.

It is best practice to define your constants in UPPER_SNAKE_CASE, 
using uppercase and seperating words with `_`'s

*example:*
```js
const CONSTANT_NAME = 10;
```

## Datatypes
All datatypes can be set as the value for a variable or a constant

There are 7 primitive data types in Javascript:

 * string
 * number
 * bigint
 * boolean
 * undefined
 * symbol
 * null

but for the purposes of berevity I will only talk about:

 * string
 * number
 * boolean

the type datatype can be found using the `typeof` keyword

### Strings
strings are used to store text.
they are created by putting the desired value into `"`.
or by calling the `String()` constructor.

*example:*
```js
var myString = "This is a string"
console.log(typeof myString) // string
```

### Numbers
numbers are used to store well numbers,
you needn't wrap them in anything just leave them as they are.
they can also be made by calling the `Number()` constructor

*example:*
```js
var myNumber = 10
console.log(typeof myNumber) // number
```

### Booleans
booleans are used to store true/false data
there are only two booleans `true` and `false`
they are used in `if` statements and `for` loops.
they can be made using the `Boolean()` constructor
or by using a comparotor like `==`

*example:*
```js
var myBoolean = true
console.log(typeof myBoolean) // boolean

myBoolean = 1==2 // false
coneole.log(typeof myBoolean) // boolean
```



