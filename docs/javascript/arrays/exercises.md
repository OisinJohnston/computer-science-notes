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




