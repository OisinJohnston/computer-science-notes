# Databases

## Information systems

* An information system is a combination of software and hardware designed for creating, recording, storing, processing and communicating information

* Information systemds allow for data analysis which can extract knowledge from data and information, which is otherwise difficult to visualize

### Example of an information system

The systems in schools which store information about:

 * Teacher and stuedent timetables

 * Teachers' class groups
 
 * Students' academic record

 * Facility for teachers to enter data on Students' performance and behaviour

 * Bookings for labs, libraries and computer rooms

 * Behind the one front end there are multiple files some of which are databases.

In our school we use VSWare as one such information system.

## What is a database?

**A database is a collection of data stored in an organised or logical manner, which can be managed accessed and updated**

Advantages of a database:

* Easily store large amounts of data

* Multiple users can access the data at the same time

[//]: # (* Improved security - data can be encrypted and password protected)

* Can interact with multiple systems: mobile phones, business software and webpages


## SQL Database terminology

* **Table:** A collection of related data made up of rows and columns

* **Record/Instance:** One row in the table, holds data about some entity

* **Attributes/Fields:** The columns of your database and the data it stores.

Each attribute has a piece of data about an individual, each attribute/field has a description outlining the data type associated with it.

## Datatypes

Datatypes are the types of data stored in a column

Examples of datatypes:

 * CHAR(size) - for a fixed length string

 * VARCHAR(size) - for a variable length string

 * BOOL - stores a true or false value

 * NUMBER - for storing a numerical value - not a numerical string, use a CHAR or VARCHAR for that.

 * DATE - for storing dates


## Database - types

 * Flat file database

 * Relational databases (e.g PostgreSQL)

 * Non relational databases (e.g Firebase)

 * Graph databases (e.g. Neo4j)





### Flat File databases

A flat file database is just a single table each row in the table is called a record and each column is an attribute,
Think of a flat file database as a single page in an excel file.

Flat file databases can also be represented in CSV files.

A CSV (Comma Seperated Values) is a file that represents a table by seperating each column with a deliminator typically a comma and each row with a newline

CSV files are typically used for importing and exporting data from different types of databases.


### Relational databases

A type of database that stores and priovides access to data points that are related to one another


[video](https://www.youtube.com/watch?v=NvrpuBAMddw)

#### Why we need relationmal databases

Because flat file databases are shit
they can result in duplicated records, they are time consuming to update and can easily lead to inconcistincies, it can also be difficult to extract the relavent data.

## Database - integrity

 * All data in the database is up to date

 * There is no repeated data

 * There is no old data that should have been over-written

 * If we update information in one table, it is updated where necessary in all linked tables.


## Primary and Foriegn keys

### Primary key

 * A primary key is a field in a database table that acts as a unique identifier for each record

 * The value stored in a primeary key field can never be repeated in another record in the table; this ensures that each record in the table is unique,

 * If there is no unique field that will make a primary key, a composite primary key made out of a selection of fields may be used but it is inadvisable and one should always consider a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) or an autoincrementing number first.

### Foriegn Key

 * A foreign key is the primary key of one table that appears in another table to make a link between the tables, foriegn keys are used to form relationships between tables.

 * Each table can have one primmary key but many foriegn keys


## Database Management Systems

 * A database management system is a aoftewre used to store, retrieve, and run queries on data. A DBMS serves as an interface between an end-user and a database, allowing users to create, read update and delete data in the database.

 * DBMSs also help to maintain the integrity of data in a system

 * Examples of DBMSs include:
   
   1. Access 
   
   2. MySQL/MariaDB

   3. Postgresql

### Transactions

 * A transaction can be a single operation but most have multiple steps

 * e.g transferring money from one account to another, one action will debit the sender account and the other will credit the reciever account, this should be done as one transaction in order to ensure that it can easily be rolled back if needs be.




