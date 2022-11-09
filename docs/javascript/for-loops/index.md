# For loops

**Relavent webdocs found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement).**

## Syntax:

```js
for (initiator; test; incStatement) {
	/*Code in here will run if the test condition is true*/
}
```

**initiator**: this step executes first. it only executes once. you can declare and initialize a loop control variable here.
it is optional, but you must end it with a semi-colon.

**test**: if the test condition is true the block of code executes otherwise it does not.

**incStatement**: this step executes at the end of every loop this is also optional but a semi-colon must also be placed at the end.

## Example:

*Example of a typical for loop:*
```js
for (let i=0; i<2; i++){
	console.log("Hello ", i)
}
```

*Example of a for loop without an initiator:*
```js
let j=0;
for (;j<2;j++){
	console.log("Hello ", j)
}
```

*Example of a for loop without an initiator or a incStatement:*
```js
let k=0;
for (;k<2;) {
	console.log("Hello ", k)
	k++
}
```
**NB: this example is the same as the following while loop:**
```js
let k=0;
while (k<2) {
	console.log("Hello ", k)
	k++
}
```
## Exercises
The exercises can be found [here](./exercises)

## Break statements
Break statements are used to exit loops 

*example of a for loop with a break statement*
```js
console.log("entering loop")

for(h=0;h<20;h++) {
    if(h==5) break;
    console.log(h)
}
```

## Continue statements
`continue` statements are used to skip the rest of this iteration

*example of a for loop with a continue statement*
```js
console.log("entering loop")

for (h=0;h<20;h++) {
    if (h==5) continue;
    console.log(h)
}
```
