SELECT 
count(*) as "num",
max(salary) as "max",
min(salary) as "min",
sum(salary) as "sum",
avg(salary) as "avg"
FROM Employee