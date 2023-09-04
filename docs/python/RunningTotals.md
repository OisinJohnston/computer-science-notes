# Running Totals

A running total is a variable that accrews value over time usually initialised too 0 and incremented by each item

*Example:*
```py
running_total = 0

# all of our prices are stored as a list
prices = [10, 14, 6]

for price in prices:
    running_total += price

print(f'your total is {running_total}')

```
