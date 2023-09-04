# File Handlers

in python we use an object called a file handler to interact with files on your file system

we can create a handler by using the **[open](https://docs.python.org/3/library/functions.html#open)** function as shown:

```py
file = open("myfile.txt")
```

NB: by default python opens the file in read only mode

file objects are iterable so we can iterate over every line in the file like this:

```py
file = open("myfile.txt")
for line in file:
    print(line, end="")
```




