const axios = require('axios');

const API_URL = 'https://fakestoreapi.com/products';

const badProducts = [
  // 1. Missing title
  {
    price: 10.99,
    description: 'No title',
    image: 'https://i.pravatar.cc',
    category: 'electronics',
    rating: { rate: 4.5, count: 10 },
  },
  // 2. Empty title
  {
    title: '',
    price: 12.99,
    description: 'Empty title',
    image: 'https://i.pravatar.cc',
    category: 'jewelery',
    rating: { rate: 4.2, count: 5 },
  },
  // 3. Negative price
  {
    title: 'Negative Price',
    price: -5.0,
    description: 'Negative price',
    image: 'https://i.pravatar.cc',
    category: 'men clothing',
    rating: { rate: 3.5, count: 2 },
  },
  // 4. Missing price
  {
    title: 'No Price',
    description: 'Missing price',
    image: 'https://i.pravatar.cc',
    category: 'women clothing',
    rating: { rate: 4.0, count: 3 },
  },
  // 5. rating.rate > 5
  {
    title: 'High Rating',
    price: 20.0,
    description: 'Rating above 5',
    image: 'https://i.pravatar.cc',
    category: 'electronics',
    rating: { rate: 5.5, count: 1 },
  },
  // 6. Missing rating
  {
    title: 'No Rating',
    price: 15.0,
    description: 'Missing rating',
    image: 'https://i.pravatar.cc',
    category: 'jewelery',
  },
  // 7. Missing rating.rate
  {
    title: 'No Rating Rate',
    price: 18.0,
    description: 'Missing rating.rate',
    image: 'https://i.pravatar.cc',
    category: 'men clothing',
    rating: { count: 7 },
  },
];

async function createBadProducts() {
  for (const [i, product] of badProducts.entries()) {
    try {
      const res = await axios.post(API_URL, product);
      console.log(`Product #${i + 1} created:`, res.data);
    } catch (err) {
      console.error(`Failed to create product #${i + 1}:`, err.response ? err.response.data : err.message);
    }
  }
}

createBadProducts(); 