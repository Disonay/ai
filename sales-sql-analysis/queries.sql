-- 1. Calculate the total sales volume for March 2024
SELECT SUM(amount) AS total_march_sales
FROM orders
WHERE strftime('%Y-%m', order_date) = '2024-03';

-- 2. Find the customer who spent the most overall
SELECT customer, SUM(amount) AS total_spent
FROM orders
GROUP BY customer
ORDER BY total_spent DESC
LIMIT 1;

-- 3. Calculate the average order value for the last three months (Feb, Mar, Apr 2024)
SELECT AVG(amount) AS avg_order_value
FROM orders
WHERE strftime('%Y-%m', order_date) IN ('2024-02', '2024-03', '2024-04'); 