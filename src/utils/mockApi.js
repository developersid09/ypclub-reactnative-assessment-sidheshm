// simple mock API - simulate network delay and errors
const sampleProducts = [
  { id: 'p1', name: 'Red Shirt', price: 29.99, category: 'Clothing', description:'Comfortable cotton shirt' },
  { id: 'p2', name: 'Running Shoes', price: 79.99, category: 'Shoes', description:'Lightweight running shoes' },
  { id: 'p3', name: 'Baseball Cap', price: 14.99, category: 'Accessories', description:'Sun protection cap' },
  { id: 'p4', name: 'Coffee Mug', price: 9.99, category: 'Home', description:'Ceramic mug' },
  { id: 'p5', name: 'Blue Jeans', price: 49.99, category: 'Clothing', description:'Stylish denim' },
  { id: 'p6', name: 'Running Shoes', price: 79.99, category: 'Shoes', description:'Lightweight running shoes' },
  { id: 'p7', name: 'Baseball Cap', price: 14.99, category: 'Accessories', description:'Sun protection cap' },
  { id: 'p8', name: 'Coffee Mug', price: 9.99, category: 'Home', description:'Ceramic mug' },
];

export async function fetchProducts() {
  await delay(500);
  const categories = Array.from(new Set(sampleProducts.map(p => p.category)));
  return { products: sampleProducts, categories };
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function mockApiLogin(email, password) {
  await delay(400);
  if (!email || !password) throw new Error('Email & password required');
  return { token: 'demo-token-' + Date.now(), user: { name: email.split('@')[0]||'User', email } };
}

export async function mockApiRegister(name, email, password) {
  await delay(600);
  if (!email || !password || !name) throw new Error('Name, email & password required');
  return { token: 'demo-token-' + Date.now(), user: { name, email } };
}
