# Arrays

The array primitive allows you to store a list of primitives in a single variable,

It stores a sequential collection of elements.

## Declaration

To declare an array you can use the `Array` constructor like this:

```js
let myArray = new Array("apples", "oranges")
```

or simply use `[]`:

```js
let myArray = ["apples", "oranges"]
```

it is reccomended that you use `[]` as it is more consistent across languages
and a good idea to gety use to that syntax.

## Accessing Elements
To access elements in an array we use indexing, indexing is when you use `[i]` (where i is the index) to access
a given index in an array, all arrays are 0-indexed in javascript meaning the index of the first element in the array will be
`0`.

if you try to access an index that does not exist it will return undefined.

*example:*
```js
let fruits = ["apples", "oranges", "bannanas"]
console.log(fruits[0]) // apples
console.log(fruits[1]) // oranges
console.log(fruits[2]) // bannanas
console.log(fruits[3]) // undefined
```

## Changing Elements

To change an element in an array simply use the assignment operator `=` on the accessed element.
if the element does not exist it will add the element to the array and fill the neccessary elements
with undefined.

*example:*
```js
let people = ["Bob", "Daniel", Dylan]
people[3] = "Robert"
console.log(people) // Bob,Daniel,Dylan,Robert

people[8] = "Gary"

console.log(people) // Bob,Daniel,Dylan,Robert,,,,,Gary
```

## Appending Elements

use the `push` method to append an element to the end of the array

```js
let array = ["Bob", "Dylan"]
array.append("Gerome")
console.log(array) // Bob,Dylan,Gerome
```

## Looping Elements

You can use a for loop to loop over the elements in an array.
simply loop over all the indices and then access the elements in the array

*example:*
```js
let pets = ["cat", "dog", "hamster"]

for(let i=0; i<pets.length; i++) {
    console.log(pets[i])
}
/* Output: 
 * cat
 * dog
 * hamster
 */
```

you can also use this to assign elements to an array

*example:*
```js
let numbers = []

for(let i=0; i<10; i++) {
    numbers[i] = i
}
console.log(numbers) // 0,1,2,...,8,9
```






