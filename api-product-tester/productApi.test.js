const axios = require('axios');

const API_URL = 'https://fakestoreapi.com/products';

describe('Product API Data Validation', () => {
  let products;
  let response;

  beforeAll(async () => {
    response = await axios.get(API_URL);
    products = response.data;
  });

  test('should return status code 200', () => {
    expect(response.status).toBe(200);
  });

  test('should check required attributes and constraints, and list defective products', () => {
    const defects = [];
    products.forEach((product, idx) => {
      const productDefects = [];
      // Check for presence and validity of 'title'
      if (!('title' in product)) {
        productDefects.push('Missing title attribute');
      } else if (typeof product.title !== 'string' || product.title.trim() === '') {
        productDefects.push('Empty or invalid title');
      }
      // Check for presence and validity of 'price'
      if (!('price' in product)) {
        productDefects.push('Missing price attribute');
      } else if (typeof product.price !== 'number' || product.price < 0) {
        productDefects.push('Negative or invalid price');
      }
      // Check for presence and validity of 'rating.rate'
      if (!('rating' in product)) {
        productDefects.push('Missing rating attribute');
      } else if (!('rate' in product.rating)) {
        productDefects.push('Missing rating.rate attribute');
      } else if (typeof product.rating.rate !== 'number' || product.rating.rate > 5) {
        productDefects.push('Invalid or too high rating.rate');
      }
      if (productDefects.length > 0) {
        defects.push({
          index: idx,
          id: product.id,
          title: product.title,
          defects: productDefects,
        });
      }
    });
    if (defects.length > 0) {
      console.log('\nDefective products found:', JSON.stringify(defects, null, 2));
    } else {
      console.log('\nNo defective products found.');
    }
    expect(defects.length).toBe(0);
  });
}); 