"""
ACID and Database Scalability Trade-offs

Atomicity
Consistency
Isolation
Durability

NewSQL


SELECT * FROM customers;

SELECT City FROM Customers;

SELECT DISTINCT Country FROM Customers;

SELECT * FROM Customers
WHERE City = 'Berlin';

SELECT * FROM Customers
WHERE NOT City = 'Berlin';

SELECT * FROM Customers
WHERE CustomerID = 32;

SELECT * FROM Customers
WHERE City = 'Berlin'
AND PostalCode = 12209;

SELECT * FROM Customers
WHERE City = 'Berlin'
OR City = 'London';

SELECT * FROM Customers
ORDER BY City;

SELECT * FROM Customers
ORDER BY City DESC;

SELECT * FROM Customers
ORDER BY Country, City;

INSERT INTO Customers (
CustomerName,
Address,
City,
PostalCode,
Country
) VALUES (
'Hekkan Burger',
'Gateveien 15',
'Sandnes',
'4306',
'Norway'
);

SELECT * FROM Customers
WHERE PostalCode IS NULL;

SELECT * FROM Customers
WHERE PostalCode IS NOT NULL;

SELECT MIN(Price)
FROM Products;

SELECT COUNT(*)
FROM Products
WHERE Price == 18;

SELECT AVG(Price)
FROM Products;

SELECT SUM(Price)
FROM Products;

SELECT * FROM Customers
WHERE City LIKE 'a%';


"""
