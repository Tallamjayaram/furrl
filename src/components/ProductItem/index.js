import React from 'react';
import ShareButton from '../ShareButton';
import './index.css';

function ProductItem({ product, onProductClick  }) {
  const handleClick = () => {
    onProductClick(product.id);
  };
  return (
    <div className="product-item product-grid"  onClick={handleClick}>
      <img src={product["images"][0]["src"]} alt={product.name} className="product-image" />
      <div className="product-details">
        <p>{product.vendor}</p>
        <h3>{product.title}</h3>
        <div className='price-card'>
        <p>Rs.{product["price"]["value"]}</p>&nbsp;
        <p className='mrp-price'>Rs.{product["MRP"]["value"]}</p>&nbsp;
        <p className='discount'>{product["discountPercent"]}%</p>&nbsp;
        <ShareButton product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
