SELECT  
address, 
count(*),
max(salary),
min(salary), 
avg(salary),
sum(salary)
FROM Employee
GROUP by address
