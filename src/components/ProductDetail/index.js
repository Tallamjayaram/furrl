
import React from 'react';
import "./index.css";

const ProductDetail = ({ product, onClose }) => {
  const { title, price, vendor, images } = product;
  console.log("prouctL",product);

  return (
    <div className="product-detail">
      <button onClick={onClose} className="close-btn">Close</button>
      <h2>{title}</h2>
      <p>Price: ₹{price.value}</p>
      <p>Vendor: {vendor}</p>
      <img src={product["images"][0]["src"]} alt={product.name} className="product-image" />
    </div>
  );
};

export default ProductDetail;
