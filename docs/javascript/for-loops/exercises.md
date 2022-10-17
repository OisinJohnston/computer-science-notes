# for loop exercises

We were asked to complete the following exercises:

 1.  Write a for loop to print all odd numbers up to and including n. [jump](./#exercise-1)
 2.  Write a for loop to calculate the factorial of n. [jump](./#exercise-2)
 3.  Write a for loop to allow someone to guess an 8 digit number. [jump](./#exercise-3)
 4.  Write a for loop to find the sum of every number from 1 to n. [jump](./#exercise-4)
 

## Exercise 1
**Instructions:** 
Write a for loop to print all odd numbers up to and including n

**Answer:**
```js
var n = 10
for (var i = 0; i<=n; i++) {
	if (i%2!=0) {
		console.log(i)
	}
}
```

## Exercise 2
**Instructions:** 
Write a for loop to calculate the factorial of n

**Answer:**
```js
var n = 5;
var result = 1;
for (var i = 1; i<=n; i++) {
    result *= i;
}
console.log(result);
```

## Exercise 3
**Instructions:** 
Write a for loop to allow someone to guess an 8 digit number. They should get four guesses
and the program should print “That is correct” if they enter the correct number and “That is
incorrect” if they enter an incorrect number. The program should stop if the user enters the
correct number.

**Answer:**
```js
var guesses = 4;
var number = 12345678;

for (i=1; i<=guesses; i++) {
    let guess = Number(prompt("Enter your guess: "));
    if (guess == number) {
        alert("That is correct");
        break;
    }
    alert("That is incorrect")
}
```

## Exercise 4
**Instructions:**
Write a for loop to find the sum of every number from 1 to n.

**Answer:**
```js
var n = 10;
var result = 0;
for (i=0; i<=n; i++) {
    result += i
}
console.log(result)
```
