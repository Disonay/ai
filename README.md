## Project Overview

### 1. API Product Tester
Automated tests to validate product data from the public API at https://fakestoreapi.com/products.
- **Purpose:** Ensure product data meets quality standards and detect/report data defects.
- **How to Use:**
  1. Install dependencies:
     ```bash
     npm install
     ```
  2. Run the tests:
     ```bash
     npm test
     ```
- **Test Objectives:**
  - Verify server response code (200)
  - Confirm each product has:
    - `title` (not empty)
    - `price` (not negative)
    - `rating.rate` (not exceeding 5)
  - Generate a list of products containing defects

### 2. Expense Calculator
A simple React web app to calculate and analyze your monthly expenses.
- **Features:**
  - Add, edit, and remove expenses
  - Calculate total and average daily expenses
  - See your top 3 largest expenses
- **Usage:**
  1. Install dependencies:
     ```bash
     npm install
     ```
  2. Start the app:
     ```bash
     npm start
     ```
  3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Sales SQL Analysis
Write SQL queries to analyze sales data for an online store.
- **Goal:** Analyze sales data using SQL queries.
- **Input Data:**
  - Provided as a SQL script to create and populate an `orders` table.
- **Tasks:**
  1. Calculate the total sales volume for March 2024.
  2. Find the customer who spent the most overall.
  3. Calculate the average order value for the last three months.
- **Expected Results:**
  - Total sales for March: 27,000
  - Top-spending customer: Alice (20,000)
  - Average order value (total sales / number of orders): 6,000

---
