import React from 'react';
import { FaRegShareSquare } from "react-icons/fa";
import './index.css';

function ShareButton({ product }) {
  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      })
      .catch(error => console.error('Error sharing', error));
    } else {
      alert('Share not supported on this browser, do it manually.');
    }
  };

  return (
    <button className="share-button" onClick={shareProduct}>
      <FaRegShareSquare/>
    </button>
  );
}

export default ShareButton;
