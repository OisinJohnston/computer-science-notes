# Binary Number System

The binary number system was invented in the late 1600s by Gottfried Leibniz.
Binary number systems have two values - 1 or 0

The number of digits in a number system is its base

Binary is base 2 - { 0, 1 } - 2

Decimal is base 10 - { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 } - 10

Hexadecimal is base 16 - { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F } - 16

## Why do we care about binary numbers?
We care about binary number systems because it allows for a series of switches to represent numerical values - which mean most computers use it/

George boole devised a way of representing philosophical logic as mathematical logic.

He invented boolean logic which is a logical theory which is centereed around three simple words known as boolean operators: "Or", "And" and "Not"

He also invented symbolic logic, now known as boolean algebra which is a branch in algebra where values are either true or false, usually denoted by 1 for true and 0 for false.

Alan turing, pointed out in the 1930s that with boolean algebra using only 3 logivcal functions, OR, AND and NOT, all computer calculations could be carried out.

## Binary addition

Binary addition is pretty intuitive
just treat it like base 10 addition, but with binary numbers.

## Converting Binary to Decimal

Like in primary school each column is given an associated value, except instead of going up in powers of 10s they go up in powers of two

e.g 0110 = 0+2+4+0 = 6

01011011 = 1+2+0+8+16+0+64+0 = 91

## Converting decimal to binary

Given a decimal number N:
divite n by 2 the remainder is the first digit

divide the quotient by 2 - this is the next digit
repeat until the quotient is 0	

Write the number from bottom to top

e.g. Number 25:

| Base | Quotient | Remainder |
|------|----------|-----------|
| 2    | 25       | 1         |
| 2    | 12       | 0         |
| 2    | 6        | 0         |
| 2    | 3        | 1         |
| 2    | 1        | 1         |
| 2    | 0        | 0         |

25 = 10011


# Hexadecimal number system

Hexadecimal is base 16 - { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F } - 16

## Why do we care?

Hexadecimal is typically: 
 * easier for humans to read,
 * Shorter to write
 * Has less chance of transcription errors

## Converting from hex to decimal

Works exactly the same as base 2 to base 10 conversions except use powers of 16

4CD in base 10: 

| 1  | 16  | 256  |
|----|-----|------|
| 13 | 12  | 4    |
| 13 | 192 | 1024 |

13 + 192 +1024 = 1229

1AB in base 10:

| 1  | 16  | 256 |
|----|-----|-----|
| 11 | 10  | 1   |
| 11 | 160 | 256 |

011+160+256=427

## Converting Decimal to Hexadecimal

Same as for base 2 just divide by 16 instead of 2


## Converting hex to binary

Take each digit in the hex number, convert each digit to decimal and the nconvert to hex

Note: every hex digit needs to be representd by 4 binary digits if your conversion has less than 4 digits pad to the left with 0s

*examples:*
```
53:

5:
0101

3:
0011

53 = 1010011

2AF:

2:
0010

A:
1010

F:
1111

2AF: 001010101111
```

## Converting binary to hex

Take each group of four binary digits - if short pad with 0's
Write each digit as it's base 10 value, write each base 10 digit as it's hex value.

*example:*
```
0010 1101

0010 = 2

1101 = 13 = D

Bin2Hex(00101101) = 2D

0010 1011

0010 = 2

1011 = 11 = B

Bin2Hex(00101011) = 2B

```

# Why do computers use binary?

* The computer processor is built on a series of transistors which have an on/off state

* The on state represents 1 in boolean algebra or electricity flowing above a certain voltage level in our circuit

* The off state represents a 0 in boolean algebra or electricity not flowing or flowing below a certain voltage in our circuit

* Computers can transmit and recieve binary easily



