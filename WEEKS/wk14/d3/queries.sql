-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
Select p.productname, c.categoryname from product as p left join category as c;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
Select * from Order; fails (syntax error), cannot proceed.

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
Select * from Order; fails (syntax error), cannot proceed.

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
Select * from Order; fails (syntax error), cannot proceed.