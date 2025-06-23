# Sales SQL Analysis

## Goal
Write SQL queries to analyze sales data for an online store.

## Input Data
Run this script in SQLite Online:

```sql
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer TEXT,
    amount REAL,
    order_date DATE
);

INSERT INTO orders (customer, amount, order_date) VALUES
('Alice', 5000, '2024-03-01'),
('Bob', 8000, '2024-03-05'),
('Alice', 3000, '2024-03-15'),
('Charlie', 7000, '2024-02-20'),
('Alice', 10000, '2024-02-28'),
('Bob', 4000, '2024-02-10'),
('Charlie', 9000, '2024-03-22'),
('Alice', 2000, '2024-03-30');
```

## Tasks
1. Calculate the total sales volume for March 2024.
2. Find the customer who spent the most overall.
3. Calculate the average order value for the last three months.

## Expected Results
- Total sales for March: 27,000
- Top-spending customer: Alice (20,000)
- Average order value (total sales / number of orders): 6,000 