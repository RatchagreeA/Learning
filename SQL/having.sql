SELECT 
address,
count(*),
sum(salary)
FROM Employee
GROUP by address
HAVING sum(salary) >= 5000 AND count(*)>=2