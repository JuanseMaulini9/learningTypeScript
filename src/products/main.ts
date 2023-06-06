import { addProduct, calcStock, products } from './product.servce';

addProduct({
  title: 'pro1',
  createdAt: new Date(),
  stock: 1,
});

addProduct({
  title: 'pro2',
  createdAt: new Date(),
  stock: 13,
  size: 'L',
});


console.log(products)
const total = calcStock()
console.log(total)
