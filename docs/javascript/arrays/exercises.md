# Array Exercise

## Instructions

1. Create an empty array,
2. Add some elements too it

From there complete the following:

### Exercise 1:
Write a program to print the elements of the array

```js
let array = []

array.push(-2, -1, 0, 1, 2, 3, 4)

for(let i=0; i<array.length; i++) console.log(array[i])
```


## Exercise 2:
Write a program to print all the negative elements in the array

```js
let array = []
array.push(-2, -1, 0, 1, 2, 3, 4)

for(let i=0; i<array.length; i++) {
    if (array[i] < 0) {
        console.log(array[i])
    }
}
```

## Exercise 3:
Write a program to find the sum of all the elements in an array

```js
let array = [];
array.push(-2, -1, 0, 1, 2, 3, 4);
let total = 0;

for(let i = 0; i<array.length; i++) {
    total += array[i]
}

console.log(total)
```

## Exercise 4:
Write a program to find the max and min elements
```js
let array = [];
array.push(-2, -1, 0, 1, 2, 3, 4);
let max=array[0]
let min=array[0]

for(let i = 0; i<array.length; i++) {
    if (array[i]>max) {
        max = array[i]
    }
    if (array[i]<min) {
        min = array[i]
    }
}
console.log("min: "+min)
console.log("max:"+max)
```

## Exercise 5:
Write a program to find the second largest element in an array

*example:*
```js
let array = [];
array.push(-2, -1, 0, 1, 2, 3, 4);

let max = array[0]
let answer = array[0]

for(let i = 0; i<array.length; i++) {
    if (array[i]>max) {
        answer = max
        max = array[i]
    }
}
console.log(answer)
```

## Exercise 6
Write a program to count the total number of even and odd elements in the array

```js
let array = [];
array.push(-2, -1, 0, 1, 2, 3, 4);

let odd = 0
let even = 0

for(let i=0; i<array.length; i++) {
    if (array[i]%2==0) even += 1;
    else odd += 1
}

console.log("even: "+even)
console.log("odd: "+odd)
```

## Exercise 7
Write a program to copy all elements from an array to another array.
```js
let array = [];
array.push(-2, -1, 0, 1, 2, 3, 4);
let newarray = [...array]
```

## Exercise 8
Write a program to add an element to the end of an array
```js
let array = [-2, -1, 0, 1, 2, 3, 4];
array.push(5);
console.log(array)
```

## Exercise 9
Write a program to delete an element from the end of an array
```js
let array = [-1,0,2,3,4,5]
array.pop()
console.log(array)
```


# Additional Exercises

## Exercise 1:
Remove all the duplicates from an array by copying unique values to a new array

```js
myArray = [0,1, 1, 2, 3, 4, 543, 243, 543, 0, 1, 1, 2]
result = []

for (i=0; i<myArray.length; i++) {
    if (result.includes(myArray[i])) {
        continue
    }
    result.push(myArray[i])
}

console.log(result)
```
