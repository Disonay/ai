# API Product Tester

This project contains automated tests to validate product data from the public API at https://fakestoreapi.com/products.

## Purpose
- Ensure product data meets quality standards
- Detect and report data defects

## How to Use
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the tests:
   ```bash
   npm test
   ```

## Test Objectives
- Verify server response code (200)
- Confirm each product has:
  - `title` (not empty)
  - `price` (not negative)
  - `rating.rate` (not exceeding 5)
- Generate a list of products containing defects 