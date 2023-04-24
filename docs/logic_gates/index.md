# What are logic gates?

Logic gates are electronic switches impleented with transistors which apply logical operations to one or more Boolean inputs in order to produce a single boolean output

# What are logic circuits?

Logic circuits are a series of logic gates compined to perform more complex operations

# Symbols

## True and False

When looking at logic circuits there are many ways of representing True:

1. True
2. 1
3. High
4. ON

there are also many ways of representing FALSE:

1. False
2. 0
3. Low
4. OFF

## Logic gate symbols

There are many ways to represent different logic gates

![](https://www.shutterstock.com/image-vector/digital-logic-gate-symbols-black-260nw-1731006772.jpg)

## Truth tables
A truth table shows every possible combination of inputs and the corresponding output for a logic gate or logic circuit

In a truth table, 1 represents True and 0 represents False

Q is typically used to represent the output

### The **NOT** gate

The not gate takes one input and returns one output, the gates output is always the opposite of it's input, 

e.g `not(1) => 0`


**Truth table for a not gate:**

| A | Q |
|---|---|
| 1 | 0 |
| 0 | 1 |

in boolean logic an overline symbol signifies that the values have been notted
therefore we can say that:
`Q = ¬A`


### The **AND** gate

The **AND** gate has two inputs, labelled A and B, it returns 1 if both inputs are 1

| A | B | Q |
|---|---|---|
| 0 | 0 | 0 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 1 | 1 |

in boolean logic we can simply indicate that the numbers have been multiplied as this has the same effect

### The **OR** gate

The **OR** gate has two inputs labelled A and B, it returns 1 if any of the inputs are 1

| A | B | Q |
|---|---|---|
| 0 | 0 | 0 |
| 1 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 1 | 1 |


### The **XOR** gate

The **XOR** gate has two inputs and outputs 1 when only one of its inputs is 1

| A | B | Q |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Q = ¬A.B + ¬B.A

Q = !A&B + !B&A

### The **NAND** gate

The **NAND** gate is a combination of the **NOT** gate and the **AND** gate:

| A | B | Q |
|---|---|---|
| 0 | 0 | 1 |
| 1 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 1 | 0 |

The **NAND** gate's truth table is the same as the **AND** gate's truth table just inverted

