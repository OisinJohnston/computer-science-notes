/* Exercise 7: FOR LOOPS
 * 1. Write a for loop to print all odd numbers up to and including n.
 * 2. Write a for loop to calculate the factorial of a number
 * 3. Write a for loop to allow someone to guess an 8 digit number
 *    it should print "That is correct if they get it correct" it should stop when they get it correct and limit them to 4 guesses
 * 4. Write a for loop to find the sum of every number from 1 to n
 */

// Program 1

n = Number(prompt("N : "))
for (var i = 0; i<n; i++) {
	if (i%2==0) {
		console.log(i)
	}
}
