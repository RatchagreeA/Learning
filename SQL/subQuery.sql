CREATE TABLE bestEmployee as
SELECT id,fname, lname ,address,salary+100000 as 'newSalary'
FROM Employee
WHERE address = (SELECT city FROM customer WHERE fname = 'AA' )
AND salary > 5000