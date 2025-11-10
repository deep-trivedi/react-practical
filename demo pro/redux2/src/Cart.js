import React, { useContext } from 'react';
import { cartContext } from './ContextCart';

function Cart() {
  const { cart, removeFromCart } = useContext(cartContext);

  return (
    <div>
      <h1>Cart</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {Array.isArray(cart) && cart.map((prd) => (
          <div
            key={prd.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              width: '220px',
              textAlign: 'center',
            }}
          >
            {/* ✅ Product image */}
            <img
              src={prd.image}
              alt={prd.title}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'contain',
              }}
            />
            
            {/* ✅ Product details */}
            <h3>{prd.title}</h3>
            <h4>Price: ₹{prd.price}</h4>
            <h4>Qty: {prd.qty}</h4>
            <h4>Total: ₹{(prd.qty * prd.price).toFixed(2)}</h4>

            {/* ✅ Delete button */}
            <button
              style={{
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => removeFromCart(prd.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
