SELECT fname, salary,
(
CASE salary 
WHEN 25000 THEN 'lead' 
WHEN 5000 THEN 'review'
WHEN 1000 THEN 'pic'
ELSE NULL END
) as title
FROM Employee
ORDER by salary


