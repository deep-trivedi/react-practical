import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from './ContextCart';

function Products() {
  const { addtocart } = useContext(cartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []); // ✅ Add empty dependency array to prevent repeated fetch calls

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((prd) => (
          <div
            key={prd.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              width: '200px',
              textAlign: 'center',
            }}
          >
            <img
              src={prd.image}
              alt={prd.title}
              style={{ width: '150px', height: '150px', objectFit: 'contain' }}
            />
            <h4>{prd.title}</h4>
            <p>₹{prd.price}</p>
            <button onClick={() => addtocart(prd)}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
