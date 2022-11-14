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


