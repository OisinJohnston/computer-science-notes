# Unary Operations

Unary operators are a bit like [assignment operators](./assignment-operations) in that they assign their result to a variable, but unlike assignment operators and other operators they only take in one input, the variable they are going to modify.

**Note: this is not an extensive list for the purposes of simplicity it only covers the ones we have covered in class, I will update it as we cover more in class**

## Contents

 * [Increment](./#increment)
 * [Decrement](./#decrement)

## Increment (`++`)
The increment operator (`++`) adds one to it's subject and returns the value

It can be put before and after it's subject:

 * After (`x++`): This returns the value (`x`) and then adds one.
 * Before (`++x`): This adds one to the variable (`x+1`) and then returns it.

*After example:*
```js
var x = 10; // x = 10
var y = x++; // y = 10 and x = 11
```
`y` is set to 10 and then one is added to x

*Before example:*
```js
var x = 10; // x = 10
var y = ++x; // x = 11 and y = 11
```

## Decrement (`--`)
The decrement operator (`--`) removes one from it's subject and returns the value

Like the [increment operator](./#increment) it can be put before and after it's subject:

 * After (`x--`): This returns the value (`x`) and then removes one.
 * Before (`--x`): This removes one from the variable (`x-1`) and then returns it.

*After example:*
```js
var x = 10; // x = 10
var y = x--; // y = 10 and x = 9
```

*Before example:*
```js
var x = 10; // x = 10
var y = --x; // y = 9 and x = 9
```
