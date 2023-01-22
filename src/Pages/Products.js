import React from 'react'
import { Link } from 'react-router-dom';



const DUMMY_PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
  { id: "p4", title: "Product 4" },
];
const Products = () => {
  return (
    <div>
      <h1>Product page</h1>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id} relative='path'>{prod.title}</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products
